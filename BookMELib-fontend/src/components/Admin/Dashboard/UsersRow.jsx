import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import dayjs from "dayjs";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const UserRow = ({ users }) => {
  const {
    first_name,
    last_name,
    email,
    user_type,
    timestamp,
    business,
    status,
  } = users || {};

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4  py-2 font-medium text-gray-900 dark:text-white">
        {first_name} {last_name}
      </td>
      <td className="px-4 py-4">{email || "N/A"}</td>
      <td className="px-4 py-4">{business?.name || "N/A"}</td>
      <td className="px-4 py-4 whitespace-nowrap">{user_type || "N/A"}</td>
      <td className="px-4 py-4">
        {timestamp ? dayjs(timestamp).format("MMM DD, YYYY") : "N/A"}
      </td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status || "Unknown"}
        </span>
      </td>
      <td className="px-4 py-2 text-right">
        <Icon path={mdiDotsVertical} size={0.9} className="cursor-pointer" />
      </td>
    </tr>
  );
};

export default UserRow;
