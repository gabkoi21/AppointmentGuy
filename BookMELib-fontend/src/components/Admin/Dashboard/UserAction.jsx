import Icon from "@mdi/react";
import useUserStore from "@/stores/userStore";

import {
  mdiSquareEditOutline,
  mdiAccountOff,
  mdiTrashCanOutline,
  mdiAccountCheck,
} from "@mdi/js";

const UserAction = ({ user }) => {
  const { deleteUser } = useUserStore();

  const handleDelete = async () => {
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
      <button
        onClick={handleDelete}
        className="flex items-center gap-1 text-red-500 hover:text-red-700"
      >
        <Icon path={mdiTrashCanOutline} size={0.8} />
      </button>
    </div>
  );
};

export default UserAction;
