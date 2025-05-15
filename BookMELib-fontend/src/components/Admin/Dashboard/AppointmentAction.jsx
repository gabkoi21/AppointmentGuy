import React from "react";
import Icon from "@mdi/react";
import {
  mdiFileEdit,
  mdiAccountOff,
  mdiAccountCheck,
  mdiTrashCanOutline,
} from "@mdi/js";

const AppointmentAction = ({ appointment }) => {
  return (
    <>
      <div className="flex justify-end items-center space-x-2">
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
    </>
  );
};

export default AppointmentAction;
