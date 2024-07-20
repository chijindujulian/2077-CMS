import { format } from "date-fns";

function formatDate(dateString) {
  const date = new Date(dateString);

  // Format the date and time
  const formattedDate = format(date, "MMMM dd, yyyy"); // Example: July 20, 2024
  const formattedTime = format(date, "hh:mm a"); // Example: 01:45 pm
  const formattedDateTime = `Published: ${formattedDate} at ${formattedTime}`;

  return formattedDateTime;
}

export default formatDate;
