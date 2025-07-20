import Icon from "@mdi/react";
import {
  mdiTrashCanOutline,
  mdiPencilOutline,
  mdiAccountOffOutline,
  mdiAccountCheckOutline,
} from "@mdi/js";
import useBusinessStore from "../../../stores/businessStore";

interface BusinessActionProps {
  business: any;
  userId: number | null;
  onClose: () => void;
  isActive: boolean;
}

interface ActionButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconPath: string;
  text: string;
  colorClasses: string;
}

const ActionButton = ({
  onClick,
  iconPath,
  text,
  colorClasses,
}: ActionButtonProps) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-2 rounded-md p-2 text-left transition-colors duration-200 ${colorClasses} hover:bg-gray-100`}
  >
    <Icon path={iconPath} size={0.8} />
    <span className="capitalize">{text}</span>
  </button>
);

const BusinessAction = ({
  business,
  userId,
  onClose,
  isActive,
}: BusinessActionProps) => {
  const { updateBusinessStatus, fetchBusinesses, deleteBusiness } =
    useBusinessStore();

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose();
  };

  const handleDeleteBusiness = async (id: string) => {
    if (!confirm("Are you sure you want to delete this business?")) return;

    try {
      const success = await deleteBusiness(id);
      if (!success) {
        console.error("Business delete failed.");
      }
    } catch (error) {
      console.error("Failed to delete business:", error);
    }
  };

  const handleToggleActive = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (userId == null) {
      console.error("Invalid userId for updating business status.");
      return;
    }

    try {
      await updateBusinessStatus(String(userId));
      await fetchBusinesses();
      console.log(
        `${isActive ? "Deactivate" : "Activate"} clicked for business ${userId}`,
      );
    } catch (error) {
      console.error("Failed to toggle business status:", error);
    } finally {
      onClose();
    }
  };

  return (
    <div className="absolute right-0 z-10 mt-2 w-56 whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 py-2 shadow-lg">
      <div className="flex flex-col gap-2 text-sm font-medium">
        <ActionButton
          onClick={handleEdit}
          iconPath={mdiPencilOutline}
          text="Edit Business"
          colorClasses="text-blue-600 hover:text-blue-800"
        />

        <ActionButton
          onClick={() => handleDeleteBusiness(business.id.toString())}
          iconPath={mdiTrashCanOutline}
          text="Delete Business"
          colorClasses="text-red-600 hover:text-red-800"
        />

        <ActionButton
          onClick={handleToggleActive}
          iconPath={isActive ? mdiAccountOffOutline : mdiAccountCheckOutline}
          text={isActive ? "Deactivate" : "Activate"}
          colorClasses={
            isActive
              ? "text-orange-600 hover:text-orange-800"
              : "text-green-600 hover:text-green-800"
          }
        />
      </div>
    </div>
  );
};

export default BusinessAction;
