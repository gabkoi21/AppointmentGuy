import { useEffect, useRef } from "react";
import {
  mdiTrashCanOutline,
  mdiDotsVertical,
  mdiPencilOutline,
  mdiAccountCheckOutline,
  mdiAccountOffOutline,
} from "@mdi/js";

import Icon from "@mdi/react";
import useUserStore from "../../../stores/userStore";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

function StatusBadge({ status }) {
  // Normalize status for lookup, e.g. "active" => "Active"
  const normalizedStatus = status
    ? status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()
    : "";

  return (
    <td className="px-4 py-2">
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${
          statusColor[normalizedStatus] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status || "Unknown"}
      </span>
    </td>
  );
}

const UserRow = ({ user, activeActionId, setActiveActionId }) => {
  const { first_name, last_name, email, user_type, business, status, id } =
    user || {};

  const actionRef = useRef(null);
  const isActionOpen = activeActionId === id;

  const handleActionClick = (e) => {
    e.stopPropagation();
    setActiveActionId(isActionOpen ? null : id);
  };

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
      <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
        {first_name} {last_name}
      </td>
      <td className="px-4 py-4">{email || "N/A"}</td>
      <td className="px-4 py-4 whitespace-nowrap">{user_type || "N/A"}</td>
      <td className="px-4 py-4">{business?.name || "N/A"}</td>

      {/* Use the StatusBadge here to show status with colors */}
      <StatusBadge status={status} />

      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
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

const UsersAction = ({ userId, onClose }) => {
  const { users, updateUserStatus, fetchUser, deleteUser } = useUserStore();

  // Get the most up-to-date user from the store
  const user = users.find((u) => u.id === userId);
  const isActive = user?.is_active;

  const handleActionClick = async (actionLabel, e) => {
    if (actionLabel === "Activate" || actionLabel === "Deactivate") {
      try {
        await updateUserStatus(userId);
        await fetchUser(); // refetch user list
        console.log(`User ${userId} status toggled successfully.`);
      } catch (error) {
        console.error("Failed to toggle status:", error);
      }
    }

    if (actionLabel === "Delete") {
      if (confirm("Are you sure you want to delete this user?")) {
        try {
          await deleteUser(userId);
          await onRefresh(); // refresh list after deletion
          console.log(`User ${userId} deleted successfully.`);
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      }
    }

    onClose();
  };
  // This fumction is used to delete user
  const handleDeleteUser = async () => {
    if (!user?.id) {
      console.error("No user ID provided");
      return;
    }

    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(user.id);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="absolute right-24 mt-2 bg-white shadow-lg whitespace-nowrap rounded-md py-2 px-3 z-10 w-40 border border-gray-200">
      <div className="flex flex-col gap-2 text-sm font-medium">
        {/* Edit */}
        <button
          onClick={(e) => handleActionClick("Edit", e)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-gray-100 w-full p-2 rounded-md"
        >
          <Icon path={mdiPencilOutline} size={0.8} />
          <span className="capitalize">Edit</span>
        </button>

        {/* Delete  This is the deleting section */}
        <button
          onClick={(e) => handleActionClick("Delete", e)}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-gray-100 w-full p-2 rounded-md"
        >
          <Icon path={mdiTrashCanOutline} size={0.8} />
          <span className="capitalize">Delete</span>
        </button>

        {/* Activate / Deactivate button */}
        <div
          onClick={(e) =>
            handleActionClick(isActive ? "Deactivate" : "Activate", e)
          }
          className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 text-left w-full p-2 rounded-md ${
            isActive
              ? "text-orange-600 hover:text-orange-800"
              : "text-green-600 hover:text-green-800"
          } hover:bg-gray-100`}
        >
          <Icon
            path={isActive ? mdiAccountOffOutline : mdiAccountCheckOutline}
            size={0.8}
          />
          <span className="capitalize">
            {isActive ? "Deactivate" : "Activate"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserRow;
