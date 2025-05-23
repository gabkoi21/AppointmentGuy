import Icon from "@mdi/react";
import useUserStore from "@/stores/userStore";

import {
  mdiSquareEditOutline,
  mdiAccountOff,
  mdiTrashCanOutline,
} from "@mdi/js";

const UserAction = ({ user }) => {
  const { deleteUser } = useUserStore();

  const handleDelete = async () => {
    if (!user?.id) {
      console.error("No user ID provided");
      return;
    }

    console;

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
      <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700">
        <Icon path={mdiSquareEditOutline} size={0.8} />
      </button>
      <button className="flex items-center gap-1 text-green-500 hover:text-green-700">
        <Icon path={mdiAccountOff} size={0.8} />
      </button>
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
