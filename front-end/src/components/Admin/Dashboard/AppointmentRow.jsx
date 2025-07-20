import dayjs from "dayjs";

// Define the Appointment type
export interface AppointmentProps {
  user_id, Business, and Service interfaces with example fields

// Your component now with fully typed props

const AppointmentRow = ({
  appointment,
  users = [],
  businesses = [],
  services = [],
}) => {
  const { user_id, business_id, service_id, timestamp } = appointment;

  const user = users.find((u) => u.id === user_id);
  const business = businesses.find((b) => b.id === business_id);
  const service = services.find((s) => s.id === service_id);

  return (
    <tr className="border-b hover) || ""} ${user.last_name?.trim() || ""}`
        ) : (
          <span className="italic text-gray-400">Unknown</span>
        )}
      </td>

      <td className="whitespace-nowrap px-3 py-2.5 text-gray-800 dark).toUpperCase() + business.name.slice(1)
        ) : (
          <span className="italic text-gray-400">Unknown</span>
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-2.5 text-gray-700 dark).toUpperCase() + service.name.slice(1)
        ) : (
          <span className="italic text-gray-400">Unknown</span>
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-2.5 text-gray-600">
        {timestamp ? (
          dayjs(timestamp).format("MMM DD, YYYY")
        ) : (
          <span className="italic text-gray-400">No Date</span>
        )}
      </td>
    </tr>
  );
};

export default AppointmentRow;
