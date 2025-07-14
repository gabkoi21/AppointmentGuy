import React, { useEffect, useState } from "react";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import DataTable from "../../components/common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";

//  This component is for the business admin layout
import useAppointment from "../../stores/appointmentStore";
import useBusinessStore from "../../stores/businessStore";

import { Link } from "react-router-dom";

const AllBusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen " />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-14">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white mb-3">
        List Businesses
      </h1>
      <ManageBusiness />
      <BusinessTable />
      <BusibessPagenation />
    </main>
  </div>
);

const ManageBusiness = () => {
  const [setIsAddBusinessOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6 w-full">
      <div className="w-1/2">
        <GlobalSearchBar>
          <input
            placeholder="Search Business"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
          />
        </GlobalSearchBar>
      </div>
    </div>
  );
};

const BusinessTable = () => {
  // Fetch businesses and appointments from the store
  const { businesses, fetchBusinesses } = useBusinessStore();
  const { fetchAppointment, appointments } = useAppointment();
  const [activeActionId, setActiveActionId] = useState(null);

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
            activeActionId={activeActionId}
            setActiveActionId={setActiveActionId}
          />
        )}
      />
    </div>
  );
};

export default AllBusinessContainer;

const BusibessPagenation = () => {
  return (
    <div className="flex items-center justify-between mt-6 mb-10">
      <div className="text-gray-600 text-md font-bold">
        <p>Showing 1 - 10 out of 50</p>
      </div>

      {/* Pagination */}
      <div>
        <ul className="flex border rounded-sm py-1.5 bg-white shadow-sm">
          <li>
            <Link
              className="px-3 rounded-r-none rounded-tr-none rounded-bt  py-2 text-gray-700 hover:bg-blue-600 hover:text-white transition"
              to="#"
              aria-label="Previous"
            >
              Prev
            </Link>
          </li>
          <li>
            <Link
              className="px-4 r py-2 bg-blue-600 text-white font-medium"
              to="#"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2  text-gray-700 hover:bg-blue-600 hover:text-white transition"
              to="#"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
              to="#"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-2 rounded-none text-gray-700 hover:bg-blue-600 hover:text-white transition"
              to="#"
              aria-label="Next"
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
