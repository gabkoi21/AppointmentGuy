import dayjs from "dayjs";
import BusinessAction from "./BusinessAction";

import { Link } from "react-router-dom";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

const BusinessRow = ({ business, appointments }) => {
  const {
    id,
    name = "N/A",
    status = "Unknown",
    timestamp,
    users = [],
  } = business || {};

  const admin = users.find(({ user_type }) => user_type === "business_admin");
  const appointmentCount =
    appointments?.filter(({ business_id }) => business_id === id).length || 0;

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
        {name || "N/A"}
      </td>
      <td className="px-4 py-2">
        {admin ? `${admin.first_name} ${admin.last_name}` : "N/A"}
      </td>
      <td className="px-4 py-4">
        {timestamp ? dayjs(timestamp).format("MMM DD, YYYY") : "N/A"}
      </td>
      <td className="px-14 py-2">{appointmentCount}</td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status || "Unknown"}
        </span>
      </td>{" "}
      <td className=" py-2">
        <BusinessAction business={business} />
      </td>
    </tr>
  );
};

export default BusinessRow;
