import { useEffect, useRef } from "react";

import {
  mdiTrashCanOutline,
  mdiDotsVertical,
  mdiCalendarEditOutline,
  mdiCheckCircleOutline,
  mdiCheckAll,
} from "@mdi/js";

import Icon from "@mdi/react";

const statusColor = {
  Scheduled: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Canceled: "bg-red-100 text-red-700",
};

const AppointmentRow = ({
  appointment,
  services,
  activeActionId,
  setActiveActionId,
}) => {
  const actionRef = useRef(null);

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
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status || "Unknown"}
        </span>
      </td>
      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
        >
          <Icon path={mdiDotsVertical} size={1} />
        </button>
        {isActionOpen && (
          <ActionAppointment
            appointmentId={id}
            onClose={() => setActiveActionId(null)}
          />
        )}
      </td>
    </tr>
  );
};

// Move this ABOVE AppointmentRow

const ActionAppointment = ({ appointmentId, onClose }) => {
  const actions = [
    {
      label: "Cancel Appointment",
      icon: mdiTrashCanOutline,
      color: "text-red-600",
      hoverColor: "hover:text-red-800",
    },
    {
      label: "Confirm",
      icon: mdiCheckCircleOutline,
      color: "text-green-600",
      hoverColor: "hover:text-green-800",
    },
    {
      label: "Mark as Completed",
      icon: mdiCheckAll,
      color: "text-green-600",
      hoverColor: "hover:text-green-800",
    },
    {
      label: "Reschedule",
      icon: mdiCalendarEditOutline,
      color: "text-purple-600",
      hoverColor: "hover:text-purple-800",
    },
  ];

  const handleActionClick = (actionLabel, e) => {
    e.stopPropagation();
    console.log(`${actionLabel} clicked for appointment ${appointmentId}`);
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 bg-white shadow-lg whitespace-nowrap rounded-md py-2 px-3 z-10 w-56 border border-gray-200">
      <div className="flex flex-col gap-2 text-sm font-medium">
        {actions.map(({ label, icon, color, hoverColor }) => (
          <button
            key={label}
            onClick={(e) => handleActionClick(label, e)}
            className={`
              flex items-center gap-2 cursor-pointer 
              transition-colors duration-200 text-left w-full 
              p-2 rounded-md
              ${color} 
              ${hoverColor} 
              hover:bg-gray-100
            `}
          >
            <Icon path={icon} size={0.8} />
            <span className="capitalize">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppointmentRow;
