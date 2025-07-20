import { useEffect, useRef } from "react";
import UsersAction from "./UsersAction";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

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

export interface UserRowProps {
  user) => void;
}

const UserRow = ({ user, activeActionId, setActiveActionId }) => {
  const actionRef = useRef(null);

  const { first_name, last_name, email, user_type, business, status, id } =
    user;

  const isActionOpen = activeActionId === id;

  const handleActionClick = (event) => {
    event.stopPropagation();
    setActiveActionId(isActionOpen ? null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target as Node)
      ) {
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

  // JSX must return something

  return (
    <tr className="border-b hover, " ").replace(/([a-z])([A-Z])/g, "$1 $2") ||
          "N/A"}
      </td>

      <td className="px-4 py-4">{business?.name || "N/A"}</td>

      <StatusBadge status={status} />

      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          className="rounded p-1 transition-colors duration-200 hover) => setActiveActionId(null)}
          />
        )}
      </td>
    </tr>
  );
};

export default UserRow;
