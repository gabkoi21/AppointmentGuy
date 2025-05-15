import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import { Appointmentcolumns } from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentColumns";
import DataTable from "@/components/common/DataTable";
import AppointmentStatusNavigation from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentActiveStatusNavigation";
import AppointmentRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentRow";
import GlobalSearchBar from "@/components/common/globalSearchBar";

import Icon from "@mdi/react";

// This component is for the appointment page
import useServiceStore from "@/stores/serviceStore";
import useAppointment from "@/stores/appointmentStore";

const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
      <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white mb-3">
        Manage your User Appointments
      </h1>
      <Apppintment />
    </main>
  </div>
);

// This component is for the appointment page
const Apppintment = () => {
  const [activeTab, setActiveTab] = useState("allappointment");

  return (
    <>
      <div className="flex mt-10">
        <AppointmentStatusNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <GlobalSearchBar>
            <div>
              <input
                placeholder="Search  Business"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-1/2 pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
              />
            </div>
          </GlobalSearchBar>
        </div>
      </div>
      <AppointmentTable activeTab={activeTab} />
    </>
  );
};

// This component is for the appointment table
const AppointmentTable = ({ activeTab }) => {
  const { fetchAppointment, appointments } = useAppointment();
  const { services, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
    fetchAppointment();
  }, []);

  // console.log("Fetched Appointments:", appointments);
  console.log("Fetched Services:", services);

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
      <AppointmentTableFooter />
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

// This component is for the footer of the appointment table
const AppointmentTableFooter = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8 ml-1 mb-10">
        <div>
          <p className="text-md text-gray-500">
            Showing <span className="font-bold text-gray-600">1-5</span> of{" "}
            <span className="font-bold text-gray-600">2,853</span> appointments
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
            <Icon path={mdiChevronLeft} size={0.9} />
            Previous
          </button>

          <button className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
            Next
            <Icon path={mdiChevronRight} size={0.9} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BusinessAppointmentContainer;
