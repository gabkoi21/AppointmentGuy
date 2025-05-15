import Icon from "@mdi/react";
import {
  mdiFileEdit,
  mdiAccountOff,
  mdiAccountCheck,
  mdiTrashCanOutline,
} from "@mdi/js";
import useBusinessStore from "@/stores/businessStore";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const BusinessAction = ({ business }) => {
  const { deleteBusiness } = useBusinessStore();
  const { id, status } = business;

  const [isOpen, setIsOpen] = useState(false);

  const confirmDelete = async () => {
    await deleteBusiness(id);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="flex justify-end items-ce
      nter space-x-2"
      >
        {/* Edit Button */}
        <button
          className="text-gray-600 hover:text-blue-600 p-1"
          onClick={() => {
            /* Add edit handler here */
            console.log("Edit clicked for", id);
          }}
        >
          <Icon path={mdiFileEdit} size={0.9} />
        </button>

        {/* Suspend / Activate Button */}
        {status === "Active" ? (
          <button
            className="text-gray-600 hover:text-yellow-600 p-1"
            onClick={() => {
              /* Add suspend handler here */
              console.log("Suspend clicked for", id);
            }}
          >
            <Icon path={mdiAccountOff} size={0.9} />
          </button>
        ) : (
          <button
            className="text-gray-600 hover:text-green-600 p-1"
            onClick={() => {
              /* Add activate handler here */
              console.log("Activate clicked for", id);
            }}
          >
            <Icon path={mdiAccountCheck} size={0.9} />
          </button>
        )}

        {/* Delete Button */}
        <button
          className="hover:text-red-600 text-red-500 p-1"
          onClick={() => setIsOpen(true)}
        >
          <Icon path={mdiTrashCanOutline} size={0.9} />
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
              Confirm Deletion
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Are you sure you want to delete this business? This action cannot
              be undone.
            </Dialog.Description>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default BusinessAction;
