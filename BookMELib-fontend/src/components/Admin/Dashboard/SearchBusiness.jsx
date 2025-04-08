import Icon from "@mdi/react";
import { mdiFilterOutline, mdiMagnify } from "@mdi/js";
import { useState } from "react";

const SearchBusiness = () => {
  const [activeTab, setActiveTab] = useState("All Business");
  const tabs = ["All Business", "Pending Approval", "Active", "Suspended"];
  return (
    <>
      <div className="flex justify-between items-center mt-10 gap-4">
        {/* Status Filter Buttons */}
        <div className="flex items-center bg-gray-200 text-black rounded-lg p-1 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded border transition ${
                activeTab === tab
                  ? "border-gray-100 bg-gray-100 text-black font-medium"
                  : "border-transparent hover:border-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-1 bg-white border rounded text-black capitalize transition">
            <Icon path={mdiFilterOutline} size={1} />
            <span className=" font-semibold">Filter</span>
          </button>

          <button className="px-4 py-1 text-white bg-gray-950 capitalize rounded transition">
            Add Business
          </button>
        </div>
      </div>

      <div className="mt-5 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon path={mdiMagnify} size={1} className="text-gray-500" />
        </div>
        <input
          placeholder="Search business"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5
                     dark:bg-white dark:border-gray-600 dark:text-white 
                     focus:outline-none focus:ring-0"
        />
      </div>
    </>
  );
};

export default SearchBusiness;
