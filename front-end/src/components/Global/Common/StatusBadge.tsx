type Status = "Active" | "Inactive" | "Pending";

interface StatusColorMap {
  Active: string;
  Inactive: string;
  Pending: string;
}

interface StatusBadgeProps {
  status: Status | string;
}

const statusColor: StatusColorMap = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-800",
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
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
