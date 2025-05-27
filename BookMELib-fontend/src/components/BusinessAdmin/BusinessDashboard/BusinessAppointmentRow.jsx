import Icon from "@mdi/react";
import {
  mdiAccountOff,
  mdiAccountCheck,
  mdiTrashCanOutline,
  mdiSquareEditOutline,
} from "@mdi/js";

const statusColor = {
  Scheduled: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Canceled: "bg-red-100 text-red-700",
};

const AppointmentRow = ({ appointment, services }) => {
  if (!appointment) return null;

  const {
    user: { first_name = "", last_name = "" } = {},
    date_time,
    status,
    service_id,
    id,
  } = appointment;

  const serviceName =
    services.find((s) => s.id === service_id)?.name || "Unknown Service";

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
        {`${first_name} ${last_name}`.trim() || "No Name"}
      </td>
      <td className="px-4 py-4 capitalize">{serviceName}</td>
      <td className="px-6 py-4">
        {date_time ? new Date(date_time).toLocaleString() : "-"}
      </td>
      <td className="px-4 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status || "Unknown"}
        </span>
      </td>
      <td className="px-4 py-4">
        <AppointmentAction status={status} id={id} />
      </td>
    </tr>
  );
};

export default AppointmentRow;

const AppointmentAction = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Edit Button */}
      <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700">
        <Icon path={mdiSquareEditOutline} size={0.8} />
      </button>
      {/* Suspend/Activate Button */}
      {status === "Active" ? (
        <button className="text-gray-600 hover:text-yellow-600 p-1">
          <Icon path={mdiAccountOff} size={0.8} />
        </button>
      ) : (
        <button
          className="text-gray-600 hover:text-green-600 p-1"
          onClick={() => {
            console.log("Activate clicked for", id);
          }}
        >
          <Icon path={mdiAccountCheck} size={0.8} />
        </button>
      )}
      {/* Delete Button */}
      <button className="flex items-center gap-1 text-red-500 hover:text-red-700">
        <Icon path={mdiTrashCanOutline} size={0.8} />
      </button>
    </div>
  );
};
