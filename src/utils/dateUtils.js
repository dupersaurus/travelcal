const moment = require('moment');

export const DESTINATION_DATE_FORMAT = "YYYY-MM-DD"
export const EVENT_DATE_FORMAT = "YYYY-MM-DD H:m"

export const START_OF_DAY = "0:0";
export const END_OF_DAY = "23:59";

// 1440 would be correct, but that'd be 0 minutes on the next day
// life is easier this way
export const MINUTES_IN_DAY = 1439;

/**
 * Returns if an event is all day
 * @param {moment} day
 * @param {moment} eventStart
 * @param {moment} eventEnd
 * @returns {boolean}
 */
export function isEventAllDay(day, eventStart, eventEnd) {
    if (!moment.isMoment(eventStart)) {
        eventStart = moment(eventStart);
    }

    if (!moment.isMoment(eventEnd)) {
        eventEnd = moment(eventEnd);
    }

    const minutes = eventEnd.diff(eventStart, "minute");

    // shorter than a day
    if (minutes < 1439) {
        return false;
    }

    // start and end is same day...
    if (eventStart.dayOfYear() === eventEnd.dayOfYear()) {
        return true;
    }

    // event spans multiple days... 
    else {
        if (day.isSame(eventStart, "day")) {
            return eventStart.format("H:m") === START_OF_DAY
        } else if (day.isSame(eventEnd, "day")) {
            return eventEnd.format("H:m") === END_OF_DAY
        }

        return true;
    }
}