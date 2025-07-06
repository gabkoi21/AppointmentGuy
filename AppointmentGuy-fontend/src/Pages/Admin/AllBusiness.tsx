import React, { useEffect, useState } from "react";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import DataTable from "../../components/common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";

//  This component is for the business admin layout
import useAppointment from "../../stores/appointmentStore";
import useBusinessStore from "../../stores/businessStore";

const AllBusinessContainer = () => (
  <div className="flex">
    <aside className="h-screen md:w-[20%] lg:w-[23%]" />
    <main className="mx-3 mt-14 w-full px-3 md:w-[98%]">
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="w-1/2">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="block w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-white dark:text-white"
            />
          </GlobalSearchBar>
        </div>
      </div>
      <BusinessTable />
    </main>
  </div>
);

const BusinessTable = () => {
  // Fetch businesses and appointments from the store
  const { businesses, fetchBusinesses } = useBusinessStore();
  const { fetchAppointments, appointments } = useAppointment();
  const [activeActionId, setActiveActionId] = useState(null);

  // Fetch businesses and appointments when the component mounts
  useEffect(() => {
    fetchBusinesses();
    fetchAppointments();
  }, []);

  return (
    <div className="mt-5">
      <DataTable
        columns={columns}
        data={businesses}
        renderRow={(item: AppointmentProps) => (
          <BusinessRow
            key={item.id}
            business={item}
            appointments={appointments}
            activeActionId={activeActionId}
            setActiveActionId={setActiveActionId}
          />
        )}
      />
    </div>
  );
};

export default AllBusinessContainer;
