import { useState } from "react";
import Icon from "@mdi/react";
import { notifications } from "../../data/Notification";
import { mdiCheck, mdiClose, mdiSend, mdiBell } from "@mdi/js";

// Mock notification data

const TaskmanagementContainer = () => (
  <div className="flex">
    <aside className="md);

const NotificationManagement = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const ShowFeedBack = () => {
    setShowFeedbackForm((prev) => !prev);
  };

  const closeModal = () => {
    setShowFeedbackForm(false);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="mt-5 flex flex-row justify-between">
        <div>
          <h1 className="md) => (
              <NotificationRow
                key={notification.id}
                notification={notification}
              />
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {showFeedbackForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <FeedbackForm onClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

const NotificationRow = ({ notification, allRead }) => {
  const { feedback, description, time, icon, iconColor } = notification;

  return (
    <tr className="odd);
};

const FeedbackForm = ({ onClose }) => {
  return (
    <div className="w-[30%]  bg-white shadow-md rounded p-6">
      <div className="flex  items-center justify-between ">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Feedback Form
        </h2>
        <button onClick={onClose}>
          <Icon className="-mt-4" path={mdiClose} size={1} />
        </button>
      </div>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-600 font-medium mb-1"
          >
            Title);
};

export default TaskmanagementContainer;
