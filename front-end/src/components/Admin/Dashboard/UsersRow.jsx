import { useEffect, useRef } from "react";
import UsersAction from "./UsersAction";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import PropTypes from "prop-types";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-800",
};

const StatusBadge = ({ status }) => {
  const normalizedStatus =
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  return (
    <td className="px-4 py-2">
      <span
        className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${
          statusColor[normalizedStatus] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    </td>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

const UserRow = ({ user, activeActionId, setActiveActionId }) => {
  const actionRef = useRef(null);

  const { first_name, last_name, email, user_type, business, status, id } =
    user;

  const isActionOpen = activeActionId === id;

  const handleActionClick = (event) => {
    event.stopPropagation();
    setActiveActionId(isActionOpen ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target)
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
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
        {first_name} {last_name}
      </td>
      <td className="px-4 py-4">{email || "N/A"}</td>
      <td className="whitespace-nowrap px-4 py-4 capitalize">
        {user_type?.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2") ||
          "N/A"}
      </td>

      <td className="px-4 py-4">{business?.name || "N/A"}</td>

      <StatusBadge status={status} />

      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          className="rounded p-1 transition-colors duration-200 hover:bg-gray-100"
        >
          <Icon path={mdiDotsVertical} size={1} />
        </button>
        {isActionOpen && (
          <UsersAction
            userId={user.id}
            onClose={() => setActiveActionId(null)}
          />
        )}
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    user_type: PropTypes.string.isRequired,
    business: PropTypes.any,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  activeActionId: PropTypes.number,
  setActiveActionId: PropTypes.func.isRequired,
};

export default UserRow;
