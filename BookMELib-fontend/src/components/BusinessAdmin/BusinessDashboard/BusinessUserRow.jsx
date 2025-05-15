import Icon from "@mdi/react";
import {
  mdiFileEdit,
  mdiAccountOff,
  mdiAccountCheck,
  mdiTrashCanOutline,
} from "@mdi/js";

// This is the action component for the business user row
const statusColor = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

// This component is for the business user row
const BusinessUserRow = ({ user }) => {
  const { first_name, last_name, address, status, email, phone_number } = user;

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 relative">
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {`${first_name} ${last_name}`}
      </td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{phone_number}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">
        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <BusinessUserAction />
      </td>
    </tr>
  );
};

// This is the action component for the business user row
const BusinessUserAction = () => {
  return (
    <div className="flex justify-end items-center space-x-2">
      {/* Edit Button */}
      <button
        className="text-gray-600 hover:text-blue-600 p-1"
        onClick={() => {
          console.log("Edit clicked for", id);
        }}
      >
        <Icon path={mdiFileEdit} size={0.9} />
      </button>

      {/* Suspend / Activate Button */}
      {status === "Active" ? (
        <button className="text-gray-600 hover:text-yellow-600 p-1">
          <Icon path={mdiAccountOff} size={0.9} />
        </button>
      ) : (
        <button
          className="text-gray-600 hover:text-green-600 p-1"
          onClick={() => {
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
  );
};

export default BusinessUserRow;
