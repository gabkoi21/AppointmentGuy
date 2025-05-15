import React from "react";
import dayjs from "dayjs";
import AppointmentAction from "./AppointmentAction";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const AppointmentRow = ({
  appointment,
  users = [],
  businesses = [],
  services = [],
}) => {
  const { user_id, business_id, service_id, timestamp, status } = appointment;

  // Helper functions to get the full name of the user and the name of the business and service
  // These functions take the list of users, businesses, and services and the respective IDs
  // and return the name or a default value if not found
  // This function takes the list of users and the user ID and returns the full name of the user
  // If the user is not found, it returns "Unknown"
  const getUserFullName = (list, id) => {
    const user = list.find((u) => u.id === user_id);
    if (!user) {
      return <span className="text-gray-400 italic">Unknown</span>;
    }
    return `${user.first_name?.trim() || ""} ${user.last_name?.trim() || ""}`;
  };

  // This function takes the list of businesses or services and the ID and returns the name
  // If the item is not found, it returns "Unknown"
  // This function takes the list of businesses or services and the ID and returns the name
  // If the item is not found, it returns "Unknown"
  const getName = (list, id) => {
    const item = Array.isArray(list)
      ? list.find((item) => item.id === id)
      : null;
    return item?.name || <span className="text-gray-400 italic">Unknown</span>;
  };

  // This is for debugging purposes and to check if the data is being passed correctly
  console.log("These are the list of our Data ");
  console.log("List business", businesses);
  console.log("List user", users);
  console.log("List service", services);

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b">
      <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
        {getUserFullName(users, user_id)}
      </td>
      <td className="px-4 py-4 text-gray-800 dark:text-gray-200">
        {getName(businesses, business_id)
          .toString()
          .replace(/^\w/, (c) => c.toUpperCase())}
      </td>
      <td className="px-2 py-4 text-gray-700 dark:text-gray-300">
        {getName(services, service_id)
          .toString()
          .replace(/^\w/, (c) => c.toUpperCase())}
      </td>
      <td className="px-2 py-4 text-gray-600">
        {timestamp ? (
          dayjs(timestamp).format("MMM DD, YYYY")
        ) : (
          <span className="text-gray-400 italic">No Date</span>
        )}
      </td>
      <td className="px-2 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </span>
      </td>

      <td className=" ">
        <AppointmentAction appointment={appointment} />
      </td>
    </tr>
  );
};

export default AppointmentRow;
