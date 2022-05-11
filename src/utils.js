import addDays from "date-fns/addDays";


export const daysBetween = ([startDate, endDate]) => {
    if (startDate > endDate) return false;
    var date = new Date(startDate);
    var dates = [];

    while (date < endDate) {
        dates.push(new Date(date));
        date = addDays(date, 1);
    }
    console.log(dates);

    return dates;
};

export const wrapEntry = (field, suffix) => `entry.${field}${suffix ? `_${suffix}` : ""}`;

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
