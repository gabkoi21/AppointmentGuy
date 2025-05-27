import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import { Appointmentcolumns } from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentColumns";
import DataTable from "@/components/common/DataTable";
import AppointmentStatusNavigation from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentNav";
import AppointmentRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentRow";
import GlobalSearchBar from "@/components/common/globalSearchBar";

import { Link } from "react-router-dom";

// This component is for the appointment page
import useServiceStore from "@/stores/serviceStore";
import useAppointmentStore from "@/stores/appointmentStore";

const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
      <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white ">
        User Appointments List
      </h1>
      <Appointment />
      <UserPagenation />
    </main>
  </div>
);

// This component is for the appointment page
const Appointment = () => {
  const [activeTab, setActiveTab] = useState("allappointment");

  return (
    <>
      <div className="flex flex-row  justify-between gap-10 items-center  ">
        {/* Search Bar Section */}
        <div className=" w-full md:w-96">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 focus:outline-none focus:ring-0"
            />
          </GlobalSearchBar>
        </div>

        {/* Status Navigation Section */}
        <div className="mt-4">
          <AppointmentStatusNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>

      {/* Appointment Table */}
      <AppointmentTable activeTab={activeTab} />
    </>
  );
};

// This component is for the appointment table
const AppointmentTable = ({ activeTab }) => {
  const { fetchAppointment, appointments } = useAppointmentStore();
  const { services, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
    fetchAppointment();
  }, []);

  return (
    <div className="mt-5">
      {activeTab === "allappointment" && (
        <>
          <DataTable
            columns={Appointmentcolumns}
            data={appointments}
            renderRow={(item, index) => (
              <AppointmentRow
                key={item.id || index}
                appointment={item}
                services={services}
              />
            )}
          />
        </>
      )}
      {activeTab === "calendarview" && <CalendarData />}
    </div>
  );
};

// This component is for the calendar view of the appointment table
const CalendarData = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className=" mb-10">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-full"
      />
    </div>
  );
};

export default BusinessAppointmentContainer;

// This component is for the pagination of the user table
const UserPagenation = () => {
  return (
    <div className="flex items-center justify-between mt-5 ">
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
