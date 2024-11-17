export function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  // Create a new Date object from the dateString
  let date = new Date(dateString);

  // Check if date is Invalid Date for ISO string
  if (isNaN(date.getTime())) {
    // Convert date string to a format recognized by Date constructor
    const [day, month, year, hour, minute] = dateString.split(/[-\s:]/);
    const isoString = `${year}-${month}-${day}T${hour}:${minute}:00`;
    date = new Date(isoString);
  }

  let strTime = "";

  // Check if time was provided
  if (dateString.includes(":")) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr =
      minutes < 10 ? "0" + minutes.toString() : minutes.toString();

    strTime = ", " + hours + ":" + minutesStr + " " + ampm;
  }

  return date.toDateString() + strTime;
}
