import React, { useState } from "react";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import DataTable from "../../components/common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";
import { businessData } from "../../data/BusinesseData";
import ActiveStatusNavigation from "../../components/common/StatusNavigation";
import GlobalFilter from "@/components/common/globalFilter";
import TableBottomNavigation from "@/components/common/TableBottomNivigation";

const AllBusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-28">
      <AllBusiness />
    </main>
  </div>
);

const AllBusiness = () => {
  const [activeTab, setActiveTab] = useState("All Business");
  return (
    <>
      <div className="flex  gap-4 justify-between items-center mb-4">
        <div>
          <ActiveStatusNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="flex gap-4">
          <GlobalFilter />
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <GlobalSearchBar>
            <div>
              <input
                placeholder="Search  Business"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
              />
            </div>
          </GlobalSearchBar>
        </div>
        <BusinessCategory />
      </div>

      <BusinessTable activeTab={activeTab} />
    </>
  );
};

const BusinessTable = ({ activeTab }) => {
  return (
    <>
      <div className="mt-5">
        {activeTab === "allbusiness" && (
          <DataTable
            columns={columns}
            data={businessData}
            renderRow={(item, index) => (
              <BusinessRow key={index} business={item} />
            )}
          />
        )}
        {activeTab === "pendingapproved" && <p>Pending approval businesses</p>}
        {activeTab === "Active" && <p>Active businesses</p>}
        {activeTab === "suspend" && <p>Suspended businesses</p>}
      </div>
      <TableBottomNavigation />
    </>
  );
};

const BusinessCategory = ({ value, onChange, active }) => {
  return (
    <div className="flex flex-col gap-2 mt-5 w-full md:w-[30%] lg:w-[20%]">
      <select
        id="category"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg py-2.5 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 active:outline-none active:ring-0 active:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      >
        <option value="">All Category</option>
        <option value="business">Beauty & Wellness</option>
        <option value="individual">Health & Medical</option>
        <option value="individual">Fitness</option>
        <option value="individual">Professional Services</option>
      </select>
    </div>
  );
};

export default AllBusinessContainer;
