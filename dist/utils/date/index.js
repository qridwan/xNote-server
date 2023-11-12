"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
/**
 * @description This function takes a date in string format and parse it to YYYY-MM-DD
 * @param {string} date
 * @returns {string}
 */
const formatDateToISO = (date) => new Date(date).toISOString().slice(0, 10);
/**
 * @description This function takes a date and return a string in MM-DD-YYYY
 * @param date
 * @returns
 */
const getDateString = (date) => {
    return [date.getMonth() + 1, date.getDate(), date.getFullYear()]
        .join("-")
        .trim();
};
exports.DateUtils = {
    formatDateToISO,
    getDateString,
};
//# sourceMappingURL=index.js.map