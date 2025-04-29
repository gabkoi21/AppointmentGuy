import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";

// Displays user data in the footer, showing current page and total users, with navigation controls
const UserPaginationFooter = () => {
  return (
    <div className="flex justify-between items-center mt-8 mb-6 text-sm text-gray-700">
      <p className="font-medium">
        Showing <span className="font-semibold text-gray-800">1-5</span> of{" "}
        <span className="font-semibold text-gray-800">2,853</span> users
      </p>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md flex items-center gap-2 text-sm text-gray-800 dark:text-white transition duration-300">
          <Icon path={mdiChevronLeft} size={1} />
          Previous
        </button>
        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md flex items-center gap-2 text-sm text-gray-800 dark:text-white transition duration-300">
          Next
          <Icon path={mdiChevronRight} size={1} />
        </button>
      </div>
    </div>
  );
};

export default UserPaginationFooter;
