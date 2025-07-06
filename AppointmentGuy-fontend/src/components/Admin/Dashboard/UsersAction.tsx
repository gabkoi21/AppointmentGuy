import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Icon from "@mdi/react";
import {
  mdiTrashCanOutline,
  mdiPencilOutline,
  mdiAccountCheckOutline,
  mdiAccountOffOutline,
} from "@mdi/js";

import useUserStore from "../../../stores/userStore";

/* ----------- ActionButton Component ----------- */
interface ActionButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconPath: string;
  text: string;
  colorClasses: string;
  disabled?: boolean;
}

const ActionButton = ({
  onClick,
  iconPath,
  text,
  colorClasses,
  disabled = false,
}: ActionButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex w-full items-center gap-2 rounded-md p-2 transition-colors duration-200 ${colorClasses} hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50`}
  >
    <Icon path={iconPath} size={0.8} />
    <span className="capitalize">{text}</span>
  </button>
);

/* ----------- UsersAction Component ----------- */
interface UsersActionProps {
  userId: number;
  onClose: () => void;
}

const UsersAction = ({ userId, onClose }: UsersActionProps) => {
  const { users, updateUserStatus, deleteUser, fetchUser } = useUserStore();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const user = users.find((u: any) => u.id === userId);
  const isActive = user?.is_active;
  const statusAction = isActive ? "Deactivate" : "Activate";

  const handleActionClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
    actionLabel: string,
  ) => {
    event.stopPropagation();

    if (loading) return;

    setLoading(true);

    try {
      if (actionLabel === "Activate" || actionLabel === "Deactivate") {
        await updateUserStatus(userId);
        await fetchUser();
        console.log(`User ${userId} status updated.`);
      }

      if (actionLabel === "Delete") {
        if (confirm("Are you sure you want to delete this user?")) {
          await deleteUser(userId);
          await fetchUser();
          console.log(`User ${userId} deleted successfully.`);
        }
      }
    } catch (error) {
      console.error(`Action ${actionLabel} failed:`, error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className="absolute right-24 z-10 mt-2 w-40 whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 py-2 shadow-lg">
      <div className="flex flex-col gap-2 text-sm font-medium">
        <ActionButton
          onClick={(event) => handleActionClick(event, statusAction)}
          disabled={loading}
          iconPath={isActive ? mdiAccountOffOutline : mdiAccountCheckOutline}
          text={loading ? "Processing..." : statusAction}
          colorClasses={
            isActive
              ? "text-orange-600 hover:text-orange-800"
              : "text-green-600 hover:text-green-800"
          }
        />

        <ActionButton
          onClick={() =>
            navigate("/Admindashboard/edituser", { state: { user } })
          }
          iconPath={mdiPencilOutline}
          text="Edit"
          colorClasses="text-blue-600 hover:text-blue-800"
        />

        <ActionButton
          onClick={(e) => handleActionClick(e, "Delete")}
          iconPath={mdiTrashCanOutline}
          text="Delete"
          colorClasses="text-red-600 hover:text-red-800"
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default UsersAction;
