import React, { useEffect } from "react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import AppointmentRow from "@/components/Admin/Dashboard/AppointmentRow";
import DataTable from "@/components/common/DataTable";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import { Appointmentcolumns } from "@/components/Admin/Dashboard/AppointmentColumns";
import AppointmentsPagination from "@/components/Admin/Dashboard/AppointmentPaginationFooter";

import useUserStore from "@/stores/userStore";

// This component is used to display the appointment container
import useAppointmentStore from "@/stores/appointmentStore";
// import useUserStore from "@/stores/userStore";
import useBusinessStore from "@/stores/businessStore";
import useServiceStore from "@/stores/serviceStore";

const ApppintmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <Appointments />
      <AppointmentsPagination />
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
        <BusinessCategory />
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
  // Fetching the data when the dependencies change
  useEffect(() => {
    fetchAppointment();
    fetchUser();
    fetchBusinesses();
    fetchServices();
  }, [fetchAppointment, fetchUser, fetchBusinesses, fetchServices]);
  return (
    <>
      <div className="mt-5">
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
    </>
  );
};

const BusinessCategory = ({ value, onChange }) => (
  <div className="flex flex-col gap-2 mt-5 w-full md:w-[30%] lg:w-[20%]">
    <select
      id="category"
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-lg py-2.5 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 active:outline-none active:ring-0 active:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    >
      <option value="">All Category</option>
      <option value="beauty">Beauty & Wellness</option>
      <option value="health">Health & Medical</option>
      <option value="fitness">Fitness</option>
      <option value="services">Professional Services</option>
    </select>
  </div>
);

export default ApppintmentContainer;
