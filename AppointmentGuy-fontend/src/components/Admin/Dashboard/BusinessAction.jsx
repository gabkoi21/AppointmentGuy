import Icon from "@mdi/react";
import {
  mdiSquareEditOutline,
  mdiAccountOff,
  mdiTrashCanOutline,
} from "@mdi/js";

import useBusinessStore from "../../../stores/businessStore";

const BusinessAction = ({ business }) => {
  const { deleteBusiness } = useBusinessStore();

  const handleDelete = async () => {
    if (!business?.id) {
      console.error("No business ID provided");
      return;
    }

    if (confirm("Are you sure you want to delete this business?")) {
      try {
        await deleteBusiness(business.id);
      } catch (error) {
        console.error("Error deleting business:", error);
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

export default BusinessAction;
