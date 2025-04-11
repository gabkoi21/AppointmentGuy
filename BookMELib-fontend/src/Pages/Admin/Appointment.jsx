import React, { useState } from "react";
import { Appointmentcolumns } from "@/components/Admin/Dashboard/AppointmentColumns";
import DataTable from "@/components/common/DataTable";
import AppointmentActiveStatusNavigation from "@/components/common/AppointmentStatusNavigation";
import GlobalFilter from "@/components/common/globalFilter";
import { AppointmentData } from "@/data/AppointmentData"; // Or wherever you store it
import AppointmentRow from "@/components/Admin/Dashboard/AppointmentRow";
import GlobalSearchBar from "@/components/common/globalSearchBar";

// Mock notification data

const ApppintmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-28">
      <Appointments />
    </main>
  </div>
);

export default ApppintmentContainer;

const Appointments = () => {
  const [activeTab, setActiveTab] = useState("allappointment");
  return (
    <>
      <div className="flex ">
        <AppointmentActiveStatusNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <GlobalFilter />
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
      <AppointmentTable activeTab={activeTab} />
    </>
  );
};

const AppointmentTable = ({ activeTab }) => {
  return (
    <div className="mt-5">
      {activeTab === "alluser" && (
        <DataTable
          columns={Appointmentcolumns}
          data={AppointmentData}
          renderRow={(item, index) => (
            <AppointmentRow key={index} appointment={item} />
          )}
        />
      )}
      {activeTab === "completed" && <p>customer information</p>}
      {activeTab === "cancelled" && <p>Tbusinessowners</p>}
      {activeTab === "admins" && <p>Suspended businesses</p>}
    </div>
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
