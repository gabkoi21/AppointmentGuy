

const statusColor = {
  Active,
  Inactive,
  Pending,
};

const StatusBadge = ({ status }) => {
  const normalizedStatus =
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  return (
    <td className="px-4 py-2">
      <span
        className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${
          statusColor[normalizedStatus as Status] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    </td>
  );
};

export default StatusBadge;
