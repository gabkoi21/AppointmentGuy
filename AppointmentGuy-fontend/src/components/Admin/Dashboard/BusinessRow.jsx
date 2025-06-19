import dayjs from "dayjs";
import { useEffect, actionRef } from "react";

import {
  mdiTrashCanOutline,
  mdiPencilOutline,
  mdiAccountOffOutline,
  mdiAccountCheckOutline,
  mdiDotsVertical,
} from "@mdi/js";

import Icon from "@mdi/react";

// import { Link } from "react-router-dom";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

const BusinessRow = ({
  business,
  appointments,
  setActiveActionId,
  activeActionId,
}) => {
  const handleActionClick = (e) => {
    e.stopPropagation();
    setActiveActionId(isActionOpen ? null : id);
  };

  const {
    id,
    name = "N/A",
    status = "Unknown",
    timestamp,
    users = [],
  } = business || {};

  const isActionOpen = activeActionId === id;

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
      </td>
      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
        >
          <Icon path={mdiDotsVertical} size={1} />
        </button>
        {isActionOpen && (
          <BusinessAction
            appointmentId={id}
            onClose={() => setActiveActionId(null)}
          />
        )}
      </td>
    </tr>
  );
};

export default BusinessRow;

const BusinessAction = ({ userId, onClose, isActive }) => {
  const actions = [
    {
      label: "Edit Business",
      icon: mdiPencilOutline,
      color: "text-blue-600",
      hoverColor: "hover:text-blue-800",
    },
    {
      label: "Delete Business",
      icon: mdiTrashCanOutline,
      color: "text-red-600",
      hoverColor: "hover:text-red-800",
    },
    {
      label: isActive ? "Deactivate" : "Activate",
      icon: isActive ? mdiAccountOffOutline : mdiAccountCheckOutline,
      color: isActive ? "text-orange-600" : "text-green-600",
      hoverColor: isActive ? "hover:text-orange-800" : "hover:text-green-800",
    },
  ];

  const handleActionClick = (actionLabel, e) => {
    e.stopPropagation();
    console.log(`${actionLabel} clicked for user ${userId}`);
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
