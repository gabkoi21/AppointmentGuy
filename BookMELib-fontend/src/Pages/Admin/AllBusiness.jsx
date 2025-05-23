import React, { useEffect, useState } from "react";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import DataTable from "../../components/common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";
import TableBottomNavigation from "@/components/common/TableBottomNivigation";
import BusinessPaginationFooter from "@/components/Admin/Dashboard/BusinessPaginationFooter";

//  This component is for the business admin layout
import useAppointment from "@/stores/appointmentStore";
import useBusinessStore from "@/stores/businessStore";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const AllBusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white mb-3">
        Manage your registered businesses
      </h1>
      <ManageBusiness />
      <BusinessTable />
      <TableBottomNavigation />
      <BusinessPaginationFooter />
    </main>
  </div>
);

const ManageBusiness = () => {
  const [setIsAddBusinessOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="w-full md:w-1/2">
        <GlobalSearchBar>
          <input
            placeholder="Search Business"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
          />
        </GlobalSearchBar>
      </div>
      <div>
        {/* <button
          onClick={() => navigate("/Admindashboard/addbusiness")}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white border rounded-md ml-4"
        >
          <Icon path={mdiPlus} size={1} />
          Add Business
        </button> */}
      </div>
    </div>
  );
};

const BusinessTable = () => {
  // Fetch businesses and appointments from the store
  const { businesses, fetchBusinesses } = useBusinessStore();
  const { fetchAppointment, appointments } = useAppointment();

  // Fetch businesses and appointments when the component mounts
  useEffect(() => {
    fetchBusinesses();
    fetchAppointment();
  }, []);

  return (
    <div className="mt-5">
      <DataTable
        columns={columns}
        data={businesses}
        renderRow={(item) => (
          <BusinessRow
            key={item.id}
            business={item}
            appointments={appointments}
          />
        )}
      />
    </div>
  );
};

export default AllBusinessContainer;
