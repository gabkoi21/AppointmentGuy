import dayjs from "dayjs";
import PropTypes from "prop-types";

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

AppointmentRow.propTypes = {
  appointment: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    business_id: PropTypes.number.isRequired,
    service_id: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  ),
  businesses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default AppointmentRow;
