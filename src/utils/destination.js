import {DESTINATION_DATE_FORMAT} from "./dateUtils"

const moment = require("moment");

/**
 * Returns if two given destinations are overlapping or not
 * @param {Object} a The first destination
 * @param {Object} b The last destination
 * @returns {boolean} 
 */
export function doDestinationsOverlap(a, b) {
    const aStart = moment(a.start, DESTINATION_DATE_FORMAT);
    const aEnd = moment(a.end, DESTINATION_DATE_FORMAT);
    const bStart = moment(b.start, DESTINATION_DATE_FORMAT);
    const bEnd = moment(b.end, DESTINATION_DATE_FORMAT);

    return ( 
        (bStart.isBetween(aStart, aEnd, "day", "[]") && bEnd.isBetween(aStart, aEnd, "day", "[]")) ||
        (aStart.isBetween(bStart, bEnd, "day", "[]") && aEnd.isBetween(bStart, bEnd, "day", "[]"))
    )
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