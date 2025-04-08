import { useState } from "react";
import GlobalSearchBar from "../../common/globalSearchBar";
import GlobalButton from "../../common/globalButton";
import GlobalFilter from "../../common/globalFilter";
import DataTable from "../../../components/common/DataTable";
import { columns } from "./BusinessColumns";
import BusinessRow from "./BusinessRow";
import { businessData } from "../../../data/BusinesseData";

const SearchBusiness = () => {
  const [activeTab, setActiveTab] = useState("All Business");
  return (
    <>
      <div className="flex justify-between items-center mt-10">
        {/* This is for the Active Status navigation */}

        <div className="flex items-center bg-gray-100 text-black rounded-lg py-1 px-2 gap-2">
          <ActiveStatusNavigation />
        </div>
        {/* This is for the Global Filter and Add Business button */}
        <div className="flex items-center gap-4">
          <GlobalFilter />
          <GlobalButton text="Add Business" />
        </div>
      </div>
      {/* This is for the Global Filter and Add Business button */}
      <div className="mt-5 relative">
        <GlobalSearchBar />
      </div>
      {/* This is for the Data Table */}
      <div>
        <DisplayBusiness activeTab={activeTab} />
      </div>
    </>
  );
};

const DisplayBusiness = ({ activeTab }) => {
  return (
    <>
      <div className="mt-5">
        {activeTab === "All Business" && (
          <DataTable
            columns={columns}
            data={businessData}
            renderRow={(item, index) => (
              <BusinessRow key={index} business={item} />
            )}
          />
        )}
      </div>
    </>
  );
};

const ActiveStatusNavigation = () => {
  const tabs = ["All Business", "Pending Approved", "Active", "Suspend"];
  return (
    <div className="flex items-center bg-gray-100 text-black rounded-lg py-1 px-2 gap-2">
      <button className="px-4 py-1 rounded text-black font-medium transition duration-200 bg-white">
        All Business
      </button>
      <button className="px-4 py-1 rounded text-black font-medium transition duration-200">
        Pending Approved
      </button>
      <button className="px-4 py-1 rounded text-black font-medium transition duration-200">
        Active
      </button>
      <button className="px-4 py-1 rounded text-black font-medium transition duration-200">
        Suspend
      </button>
    </div>
  );
};

export default SearchBusiness;
