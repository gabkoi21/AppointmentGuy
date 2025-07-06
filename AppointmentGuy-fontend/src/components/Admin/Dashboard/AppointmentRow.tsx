import dayjs from "dayjs";

// Define the Appointment type
export interface AppointmentProps {
  user_id: number;
  business_id: number;
  service_id: number;
  timestamp: string;
}

// Define User, Business, and Service interfaces with example fields
interface User {
  first_name: string;
  last_name: string;
  id: number;
  name: string;
}

interface Business {
  id: number;
  name: string;
}

interface Service {
  id: number;
  name: string;
}

type AppointmentRowProps = {
  appointment: AppointmentProps;
  users: User[];
  businesses: Business[];
  services: Service[];
  activeActionId?: any;
  setActiveActionId?: any;
};

// Your component now with fully typed props

const AppointmentRow = ({
  appointment,
  users = [],
  businesses = [],
  services = [],
}: AppointmentRowProps) => {
  const { user_id, business_id, service_id, timestamp } = appointment;

  const user = users.find((u) => u.id === user_id);
  const business = businesses.find((b) => b.id === business_id);
  const service = services.find((s) => s.id === service_id);

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="whitespace-nowrap px-3 py-2.5 font-medium text-gray-900 dark:text-white">
        {user ? (
          `${user.first_name?.trim() || ""} ${user.last_name?.trim() || ""}`
        ) : (
          <span className="italic text-gray-400">Unknown</span>
        )}
      </td>

      <td className="whitespace-nowrap px-3 py-2.5 text-gray-800 dark:text-gray-200">
        {business ? (
          business.name.charAt(0).toUpperCase() + business.name.slice(1)
        ) : (
          <span className="italic text-gray-400">Unknown</span>
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-2.5 text-gray-700 dark:text-gray-300">
        {service ? (
          service.name.charAt(0).toUpperCase() + service.name.slice(1)
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
