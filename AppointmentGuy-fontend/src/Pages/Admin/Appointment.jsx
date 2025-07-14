import React, { useEffect } from "react";

import AppointmentRow from "../../components/Admin/Dashboard/AppointmentRow";
import DataTable from "../../components/common/DataTable";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import { Appointmentcolumns } from "../../components/Admin/Dashboard/AppointmentColumns";
import AppointmentsPagination from "../../components/Admin/Dashboard/AppointmentPaginationFooter";

import useUserStore from "../../stores/userStore";

import { Link } from "react-router-dom";

// This component is used to display the appointment container
import useAppointmentStore from "../../stores/appointmentStore";
// import useUserStore from "../../stores/userStore";
import useBusinessStore from "../../stores/businessStore";
import useServiceStore from "../../stores/serviceStore";

const ApppintmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-14">
      <Appointments />
      <AppointmentPagenation />
    </main>
  </div>
);

const Appointments = () => {
  // Fetching the appointment, user, business, and service data from the respective stores
  // This is done using the useEffect hook to ensure that the data is fetched when the component mounts
  // and when the dependencies change

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md w-1/2 pl-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </GlobalSearchBar>
        </div>
      </div>
      <AppointmentTable />
    </div>
  );
};

const AppointmentTable = () => {
  const { appointments, fetchAppointment } = useAppointmentStore();
  const { users, fetchUser } = useUserStore();
  const { businesses, fetchBusinesses } = useBusinessStore();
  const { fetchServices, services } = useServiceStore();

  // Fetching the data when the component mounts
  useEffect(() => {
    fetchAppointment();
    fetchUser();
    fetchBusinesses();
    fetchServices();
  }, [fetchAppointment, fetchUser, fetchBusinesses, fetchServices]);

  return (
    <div className="mt-5 w-full overflow-x-auto">
      <div className="min-w-[700px]"></div>
      <DataTable
        columns={Appointmentcolumns}
        data={appointments}
        renderRow={(appointment) => (
          <AppointmentRow
            key={appointment.id}
            appointment={appointment}
            users={users}
            businesses={businesses}
            services={services}
          />
        )}
      />
    </div>
  );
};

export default ApppintmentContainer;

const AppointmentPagenation = () => {
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
