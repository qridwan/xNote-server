/**
 * @description This function takes a date in string format and parse it to YYYY-MM-DD
 * @param {string} date
 * @returns {string}
 */
const formatDateToISO = (date: string): string =>
  new Date(date).toISOString().slice(0, 10);

/**
 * @description This function takes a date and return a string in MM-DD-YYYY
 * @param date
 * @returns
 */
const getDateString = (date: Date): string => {
  return [date.getMonth() + 1, date.getDate(), date.getFullYear()]
    .join("-")
    .trim();
};
export const DateUtils = {
  formatDateToISO,
  getDateString,
};
