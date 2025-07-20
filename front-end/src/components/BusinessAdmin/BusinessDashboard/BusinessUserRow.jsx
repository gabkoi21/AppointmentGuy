import { useEffect, actionRef } from "react";
import Icon from "@mdi/react";
import {
  mdiDotsVertical,
  mdiAccountCheckOutline,
  mdiBlockHelper,
} from "@mdi/js";

const statusColor = {
  Active,
  Inactive,
};

const BusinessUserRow = ({ user, activeActionId, setActiveActionId }) => {
  const { first_name, last_name, email, address, phone_number, status, id } =
    user || {};

  const handleActionClick = (e) => {
    e.stopPropagation();
    setActiveActionId(isActionOpen ? null);
  };

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

  return (
    <tr className="border-b hover) => setActiveActionId(null)}
          />
        )}
      </td>
    </tr>
  );
};

export default BusinessUserRow;

const ActionAppointment = ({ appointmentId, onClose }) => {
  const actions = [
    {
      label,
      icon,
      color,
      hoverColor,
    },
    {
      label,
      icon,
      color,
      hoverColor,
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
              hover))}
      </div>
    </div>
  );
};
