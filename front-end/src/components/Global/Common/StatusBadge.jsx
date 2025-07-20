import PropTypes from "prop-types";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-800",
};

const StatusBadge = ({ status }) => {
  const normalizedStatus =
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  return (
    <td className="px-4 py-2">
      <span
        className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${
          statusColor[normalizedStatus] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    </td>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusBadge;
