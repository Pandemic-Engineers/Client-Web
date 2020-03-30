import moment from "moment";

export function toLocalString(value) {
  return moment(value)
    .local()
    .format("MM-DD HH:mm");
}
export function toLocalDateString(value) {
  return moment(value)
    .local()
    .format("DD-MM-YYYY");
}
export function shortenDate(value) {
  return moment(value)
    .local()
    .format("MMM-DD");
}
export function dateToUnixTimestamp(time) {
  var date = new Date(time);
  return Math.floor(date.getTime() / 1000);
}
export function unixTimestampToDate(unixTimestamp) {
  return new Date(unixTimestamp * 1000);
}
