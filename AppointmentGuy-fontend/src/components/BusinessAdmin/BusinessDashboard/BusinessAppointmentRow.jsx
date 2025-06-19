import { useEffect, useRef, useState } from "react";
import {
  mdiTrashCanOutline,
  mdiDotsVertical,
  mdiCheckCircleOutline,
  mdiCheckAll,
  mdiLoading,
} from "@mdi/js";
import Icon from "@mdi/react";
import useAppointmentStore from "@/stores/appointmentStore";

const statusColor = {
  scheduled: "bg-blue-100 text-blue-700",
  confirmed: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  // Fallback for capitalized versions
  Scheduled: "bg-blue-100 text-blue-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Canceled: "bg-red-100 text-red-700",
  Cancelled: "bg-red-100 text-red-700",
};

const AppointmentRow = ({
  appointment,
  services,
  activeActionId,
  setActiveActionId,
}) => {
  const actionRef = useRef(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    user: { first_name = "", last_name = "" } = {},
    status,
    scheduled_time,
    service_id,
    id,
  } = appointment;

  const serviceName =
    services.find((s) => s.id === service_id)?.name || "Unknown Service";
  const fullName = `${first_name} ${last_name}`.trim() || "No Name";

  const isActionOpen = activeActionId === id;

  const handleActionClick = (e) => {
    e.stopPropagation();
    setActiveActionId(isActionOpen ? null : id);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (actionRef.current && !actionRef.current.contains(event.target)) {
        if (activeActionId === id) {
          setActiveActionId(null);
        }
      }
    };

    if (isActionOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActionOpen, activeActionId, id, setActiveActionId]);

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
        {fullName}
      </td>
      <td className="px-3 py-4 capitalize">{serviceName}</td>
      <td className="px-3 py-4">{scheduled_time}</td>
      <td className="px-3 py-4">
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              statusColor[status] || "bg-gray-200 text-gray-700"
            }`}
          >
            {status || "Unknown"}
          </span>
          {isUpdating && (
            <Icon
              path={mdiLoading}
              size={0.6}
              className="animate-spin text-blue-500"
            />
          )}
        </div>
      </td>

      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          disabled={isUpdating}
          className="p-1 hover:bg-gray-100 rounded transition-colors duration-200 disabled:opacity-50"
        >
          <Icon path={mdiDotsVertical} size={1} />
        </button>
        {isActionOpen && (
          <ActionAppointment
            appointment={appointment}
            onClose={() => setActiveActionId(null)}
            setIsUpdating={setIsUpdating}
          />
        )}
      </td>
    </tr>
  );
};

// Dropdown actions component
const ActionAppointment = ({ appointment, onClose, setIsUpdating }) => {
  const { updateAppointmentStatus, loading } = useAppointmentStore();
  const [localError, setLocalError] = useState(null);

  const handleActionClick = async (newStatus, e) => {
    e.stopPropagation();

    try {
      console.log(
        `Updating appointment ${appointment.id} to status: ${newStatus}`
      );

      // Call the store function with correct parameters
      await updateAppointmentStatus(appointment.id, newStatus);

      console.log(
        `Successfully updated appointment ${appointment.id} to "${newStatus}"`
      );

      // Close the dropdown after successful update
      onClose();
    } catch (err) {
      console.error("Failed to update appointment status:", err);

      // Set local error message
      const errorMessage =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to update appointment status";
      setLocalError(errorMessage);

      // Don't close dropdown if there's an error so user can retry
    } finally {
      setIsUpdating(false);
    }
  };

  // Don't show certain actions based on current status
  const canCancel = !["cancelled", "completed"].includes(
    appointment.status?.toLowerCase()
  );
  const canConfirm = !["confirmed", "completed", "cancelled"].includes(
    appointment.status?.toLowerCase()
  );
  const canComplete = !["completed", "cancelled"].includes(
    appointment.status?.toLowerCase()
  );

  return (
    <div className="absolute right-0 mt-2 bg-white shadow-lg whitespace-nowrap rounded-md py-2 px-3 z-10 w-56 border border-gray-200">
      {localError && (
        <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-600">
          {localError}
        </div>
      )}

      <div className="flex flex-col gap-2 text-sm font-medium">
        {canCancel && (
          <button
            onClick={(e) => handleActionClick("cancelled", e)}
            disabled={loading}
            className="flex items-center gap-2 p-2 rounded-md text-red-600 hover:text-red-800 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon path={mdiTrashCanOutline} size={0.8} />
            <span>Cancel Appointment</span>
          </button>
        )}

        {canConfirm && (
          <button
            onClick={(e) => handleActionClick("confirmed", e)}
            disabled={loading}
            className="flex items-center gap-2 p-2 rounded-md text-blue-600 hover:text-blue-800 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon path={mdiCheckCircleOutline} size={0.8} />
            <span>Confirm</span>
          </button>
        )}

        {canComplete && (
          <button
            onClick={(e) => handleActionClick("completed", e)}
            disabled={loading}
            className="flex items-center gap-2 p-2 rounded-md text-green-600 hover:text-green-800 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon path={mdiCheckAll} size={0.8} />
            <span>Mark as Completed</span>
          </button>
        )}

        {/* Debug info - remove in production */}
        <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-gray-500">
          Current: {appointment.status} | ID: {appointment.id}
        </div>
      </div>
    </div>
  );
};

export default AppointmentRow;
