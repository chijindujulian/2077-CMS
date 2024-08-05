import { format } from "date-fns";

function formatDate(dateString) {
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date"; // or a default value
  }

  // Format the date and time
  const formattedDate = format(date, "MMMM dd, yyyy");
  const formattedTime = format(date, "hh:mm a");
  const formattedDateTime = `Published: ${formattedDate} at ${formattedTime}`;

  return formattedDateTime;
}

export default formatDate;