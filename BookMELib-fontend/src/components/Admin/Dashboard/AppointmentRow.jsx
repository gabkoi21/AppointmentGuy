import React from "react";
import dayjs from "dayjs";

function AppointmentRow({
  appointment,
  users = [],
  businesses = [],
  services = [],
}) {
  const { user_id, business_id, service_id, timestamp } = appointment;

  const user = users.find((u) => u.id === user_id);
  const business = businesses.find((b) => b.id === business_id);
  const service = services.find((s) => s.id === service_id);

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b">
      <td className="px-3 py-2.5 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {user ? (
          `${user.first_name?.trim() || ""} ${user.last_name?.trim() || ""}`
        ) : (
          <span className="text-gray-400 italic">Unknown</span>
        )}
      </td>
      <td className="px-3 py-2.5 text-gray-800 dark:text-gray-200 whitespace-nowrap">
        {business ? (
          business.name.charAt(0).toUpperCase() + business.name.slice(1)
        ) : (
          <span className="text-gray-400 italic">Unknown</span>
        )}
      </td>
      <td className="px-3 py-2.5 text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {service ? (
          service.name.charAt(0).toUpperCase() + service.name.slice(1)
        ) : (
          <span className="text-gray-400 italic">Unknown</span>
        )}
      </td>
      <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">
        {timestamp ? (
          dayjs(timestamp).format("MMM DD, YYYY")
        ) : (
          <span className="text-gray-400 italic">No Date</span>
        )}
      </td>
    </tr>
  );
}

export default AppointmentRow;
