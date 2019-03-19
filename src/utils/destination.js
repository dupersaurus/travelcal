import {DESTINATION_DATE_FORMAT} from "./dateUtils"

const moment = require("moment");

/**
 * Returns if two given destinations are overlapping or not
 * @param {Object} a The first destination
 * @param {Object} b The last destination
 * @returns {number} -1 if a overlaps b, 0 if they do not overlap, 1 if b overlaps a 
 */
export function doDestinationsOverlap(a, b) {
    const aStart = moment(a.start, DESTINATION_DATE_FORMAT);
    const aEnd = moment(a.end, DESTINATION_DATE_FORMAT);
    const bStart = moment(b.start, DESTINATION_DATE_FORMAT);
    const bEnd = moment(b.end, DESTINATION_DATE_FORMAT);

    // b is entirely inside a
    if (bStart.isBetween(aStart, aEnd, "day", "[]") && bEnd.isBetween(aStart, aEnd, "day", "[]")) {
        return -1;
    }

    // a is entirely inside b
    if (aStart.isBetween(bStart, bEnd, "day", "[]") && aEnd.isBetween(bStart, bEnd, "day", "[]")) {
        return 1;
    }

    // b starts inside of a
    if (bStart.isBetween(aStart, aEnd, "day", "()")) {
        return -1;
    }

    // a starts inside of b
    if (aStart.isBetween(bStart, bEnd, "day", "()")) {
        return 1;
    }

    return 0;
}

/**
 * Returns if two given destinations are consecutive or not
 * @param {Object} a The first destination
 * @param {Object} b The last destination
 * @returns {boolean} 
 */
export function doDestinationsJoin(a, b) {
    return a.start === b.end || a.end === b.start;
}

export function getDestinationsForDay(day, destinations) {
    const matches = [];

    destinations.forEach((dest) => {
        const start = moment(dest.start, DESTINATION_DATE_FORMAT);
        const end = moment(dest.end, DESTINATION_DATE_FORMAT);

        if (day.isBetween(start, end, "day", "[]")) {
            matches.push(dest);
        }
    })

    return matches;
}