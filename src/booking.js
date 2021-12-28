import React, {useState, useEffect, useMemo} from "react";
import {Segment, Form, Button, Dimmer, Loader, Header} from "semantic-ui-react";
import { DateRange } from 'react-date-range';
import {NavLink} from "react-router-dom";
import {validateEmail, daysBetween} from "./utils";
import FormField from "./form-field";
import {toast} from "react-toastify";
import ical from "cal-parser";
import addDays from 'date-fns/addDays';
import CryptoJS from "crypto-js";
import usePin from "./usePin";

const FORM_URL = "U2FsdGVkX19CaEPmI3ESVzW0EPqHIsoZH9EopQ/5uRS2f3FS9DbCSz23FNX7to/U2IDZnHnbkhyr7nqISS+obqTSqarEhicamPzP7Lr7Zzt6mDbcaL4nuHPetIdYRQvM2LlIAbVVYIjg5YTa+yTb+pWTZDDhWJo=";
const CALENDAR_URL = "U2FsdGVkX1+pP/BVoDC4cX/ZnWE8sIt0gC3eKfSBcg4HgNTwvL9hvvHtlhv1bpIE3XHgKwba3XA5LdWxTEc9nPcQB49NdkOZyEbs7I7hACGs0TlIExNo5QvO8aaWGdK5G0CZcNwDKOFSNASCsj+lPAKHwGAptCtLXkKQw6vwZ4Ey6EE="
const CORS_URL = "U2FsdGVkX1/eEgzKJvR0klKRYetkWD2SvQEVBvTkD6R4nR/7f7ekSw==";
const HEADERS = {
    "X-Booking-System": true
}


const fields = [
    // Name
    new FormField("1612885326", state => state.name),
    // Email
    new FormField("677014387", state => state.email),
    // Note
    new FormField("597765592", state => state.note),
    // Start Date
    new FormField("766630453", state => state.date[0].startDate.getDate(), "day"),
    new FormField("766630453", state => state.date[0].startDate.getMonth() + 1, "month"),
    new FormField("766630453", state => state.date[0].startDate.getUTCFullYear(), "year"),
    new FormField("766630453", () => "0", "hour"),
    new FormField("766630453", () => "0", "minute"),
    // End Date
    new FormField("687147112", state => state.date[0].endDate.getDate(), "day"),
    new FormField("687147112", state => state.date[0].endDate.getMonth() + 1, "month"),
    new FormField("687147112", state => state.date[0].endDate.getUTCFullYear(), "year"),
    new FormField("687147112", () => "23", "hour"),
    new FormField("687147112", () => "59", "minute"),
];


const BookingForm = () => {
    const minDate = addDays(new Date(), 1);
    const [pin] = usePin();

    const defaultState = {
        name: "",
        email: "",
        date: [{
          startDate: minDate,
          endDate: minDate,
          key: 'selection'
        }],
        note: ""
    }

    const fields = useMemo(() => {
        return {
            FORM_URL: CryptoJS.RC4.decrypt(FORM_URL, pin).toString(CryptoJS.enc.Utf8),
            CALENDAR_URL: CryptoJS.RC4.decrypt(CALENDAR_URL, pin).toString(CryptoJS.enc.Utf8),
            CORS_URL: CryptoJS.RC4.decrypt(CORS_URL, pin).toString(CryptoJS.enc.Utf8)
        }
    }, [pin]);

    const [state, setState] = useState(defaultState);
    const [booked, setBooked] = useState(false);
    const [booking, setBooking] = useState(false);
    const [dates, setDates] = useState(null);

    useEffect(() => {
        fetch(fields.CORS_URL + fields.CALENDAR_URL, {
                headers: HEADERS
            }
        )
            .then(resp => resp.text())
            .then(data => {
                const events = ical.parseString(data).events.map(x => [x.dtstart.value, x.dtend?.value || new Date(x.dtstart.value)])
                const dates = events.map(x => daysBetween(x)).flat()
                setDates(dates)
            })
    }, []);

    const handleChange = (e, {name, value}) => setState({...state, [name]: value});
    const handleDateChange = (item) => setState({...state, date: [item.selection]})
    const clearBooking = () => {
        setState(defaultState);
        setBooked(false)
    };

    const handleBooking = () => {
        // Initialise and populate the form
        setBooking(true);
        const formData = new FormData()
        fields.forEach(field => formData.append(...field.process(state)));

        fetch(fields.CORS_URL + fields.FORM_URL, {
            method: "POST",
            headers: HEADERS,
            body: formData
        })
            .then(resp => {
                console.log(resp.text())
                return resp.status
            })
            .then(code => {
                if (code == 200) {
                    setBooked(true);
                    setBooking(false);
                } else {
                    throw new Error("Invalid response code")
                }
            })
            .catch(() => toast.error("An unknown error ocurred booking your stay"))
    };

    return (
        <div className="booking-form"
            style={{
                marginLeft: "auto",
                width: "25vw",
                minWidth: "363px",
                maxWidth: "500px"
            }}
            >
                <Segment>
                    <Dimmer inverted active={!dates || booking}>
                        <Loader content={!dates ? "Loading" : "Booking your stay"} />
                    </Dimmer>
                    {booked ? (
                        <React.Fragment>
                            <p>
                                Thank you for your booking. If this date is available, a booking request
                                has been sent to Stewart and Nicky. Please lookout for an email with a
                                confirmation soon.
                            </p>
                            <Button content="Make another booking" onClick={clearBooking} />
                        </React.Fragment>
                    ) : (
                        <Form onSubmit={handleBooking}>
                            <Header content="Book your stay" />
                            <Form.Input
                                required
                                label="Name"
                                name="name"
                                placeholder="Joe Bloggs"
                                value={state.name}
                                onChange={handleChange}
                            />
                            <Form.Input
                                required
                                label="Email"
                                name="email"
                                placeholder="user@email.com"
                                value={state.email}
                                onChange={handleChange}
                                error={(state.email.length == 0 || validateEmail(state.email)) ? undefined : "Please enter a valid email"}
                            />
                            <DateRange
                                editableDateInputs={false}
                                onChange={handleDateChange}
                                ranges={state.date}
                                disabledDates={dates || []}
                                minDate={minDate}
                            />
                            <Form.TextArea
                                label="Leave a note for your booking"
                                name="note"
                                value={state.note}
                                onChange={handleChange}
                            />
                            <Button content="Request booking" />
                        </Form>
                    )}
                </Segment>
            </div>
    );
}

export default BookingForm;
