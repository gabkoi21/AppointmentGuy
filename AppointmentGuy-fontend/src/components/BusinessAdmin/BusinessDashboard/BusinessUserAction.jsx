import Icon from "@mdi/react";
import useUserStore from "../../../stores/userStore";
import {
  mdiFileEdit,
  mdiAccountOff,
  mdiAccountCheck,
  mdiTrashCanOutline,
} from "@mdi/js";

const BusinessUserAction = ({ user }) => {
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
    <div className="flex items-center gap-3">
      {/* Edit Button */}
      <button
        className="text-gray-600 hover:text-blue-600 "
        onClick={() => {
          console.log("Edit clicked for", id);
        }}
      >
        <Icon path={mdiFileEdit} size={0.8} />
      </button>

      {/* Suspend / Activate Button */}
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
        className="hover:text-red-600 text-red-500 p-1"
        onClick={handleDelete}
      >
        <Icon path={mdiTrashCanOutline} size={0.8} />
      </button>
    </div>
  );
};

export default BusinessUserAction;
