import React from "react";

const PaginationFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="mb-2 md:mb-0 text-sm text-gray-700 dark:text-gray-300">
        <span className="font-semibold">1</span> -{" "}
        <span className="font-semibold">10</span> of{" "}
        <span className="font-semibold">50</span> users
      </div>
      <div className="flex items-center space-x-1">
        <button className="px-3 py-1 rounded-l border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition">
          Prev
        </button>
        <button className="px-3 py-1 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold">
          1
        </button>
        <button className="px-3 py-1 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition">
          2
        </button>
        <button className="px-3 py-1 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition">
          3
        </button>
        <span className="px-2 text-gray-400 dark:text-gray-500">...</span>
        <button className="px-3 py-1 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition">
          5
        </button>
        <button className="px-3 py-1 rounded-r border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition">
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationFooter;
