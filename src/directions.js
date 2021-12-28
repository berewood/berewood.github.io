import React, {useState, useEffect, useMemo} from "react";
import {Segment, Form, Button, Dimmer, Header, Icon} from "semantic-ui-react";
import { DateRange } from 'react-date-range';
import {NavLink} from "react-router-dom";
import {validateEmail, daysBetween} from "./utils";
import FormField from "./form-field";
import {toast} from "react-toastify";
import ical from "cal-parser";
import addDays from 'date-fns/addDays';
import GoogleMapReact from 'google-map-react';
import CryptoJS from "crypto-js";
import usePin from "./usePin";

const ENC = "U2FsdGVkX19/n+iif77Bh6rFS6+TKusCtniKW1Rq7bR3MrwK0/SPknTk6gkXdkmz8S8WP/aahg==";

const info = {
    center: {
      lat: 50.663917627819615,
      lng: -3.672083526204176
    },
    zoom: 15
}

const house = {x: 565.578125, y: 245.5, lat: 50.66267989016971, lng: -3.6696588092547056};
const bridford = {x: 412.578125, y: 144.5, lat: 50.665427351553745, lng: -3.6762248569231626};

const getMapOptions = (maps) => ({
        streetViewControl: false,
        scaleControl: true,
        fullscreenControl: false,
        // styles: [{
        //     featureType: "poi.business",
        //     elementType: "labels",
        //     stylers: [{
        //         visibility: "off"
        //     }]
        // }],
        // gestureHandling: "greedy",
        disableDoubleClickZoom: true,
        // minZoom: 11,
        // maxZoom: 18,
        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.HYBRID,
        zoomControl: true,
        clickableIcons: false
});

const Marker = ({text, icon}) => (
    <div
        style={{
            color: "white",
            display: "flex",
            fontSize: "1.3em",
        }}
    >
        <Icon name={icon} size="large" inverted />
        {text}
    </div>
)

const Line = () => (
    <div
        lat={50.66241423611752}
        lng={-3.672228977746599}
    >

    </div>
)



const handleApiLoaded = (map, maps) => {
    const drivewayCoords = [
        {lat: 50.66250944840289, lng: -3.672352359361284},
        {lat: 50.66233262543355, lng: -3.671574518746965},
        {lat: 50.66270023195469, lng: -3.6695861900784132}
    ];
    const drivewayPath = new maps.Polyline({
        path: drivewayCoords,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    drivewayPath.setMap(map);
}

const Directions = () => {
    const [pin] = usePin();
    const onClick = (props) => {
        console.log(props)
    }
    const onChange = (props) => {
        console.log(props)
    }
    const key = useMemo(() => CryptoJS.RC4.decrypt(ENC, pin).toString(CryptoJS.enc.Utf8), [pin]);

    return (
        <Segment style={{marginLeft: "auto", marginRight: "auto"}}>
            <Header content="Directions to Berewood, Bridford from Exeter" />
            <p>Come along the B3193 from A38.</p>
            <p>Turn left following signs to Bridford/The Bridford Inn up Pound Lane.</p>
            <p>1 mile up lane you will enter Bridford. Turn left towards pub (No through road)</p>
            <p>After 20m you will pass a small church, turn immediately left down a narrow track sign posted Christow.</p>
            <p>After 200m track forks, take left hand sign posted Christow. After a further 200m you will see a set of gates and track on the left opposite a garage (highligted in red). This is Berewood</p>
            <div style={{height: "300px", width: "100%"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    defaultCenter={info.center}
                    defaultZoom={info.zoom}
                    options={getMapOptions}
                    onClick={onClick}
                    onChange={onChange}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <Marker
                        lat={50.662751507364874}
                        lng={-3.6694815790401614}
                        text="Berewood"
                        icon="home"
                    />
                    <Marker
                        lat={50.6656177637126}
                        lng={-3.6762248569231626}
                        text="Bridford"
                        icon="circle outline"
                    />
                </GoogleMapReact>
            </div>
        </Segment>
    );
};

export default Directions;
