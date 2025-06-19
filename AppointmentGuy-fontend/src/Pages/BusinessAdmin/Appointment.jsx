import React, { useEffect, useState } from "react";
import BusinessUserPagenation from "./BusinessUserPagination";

import { Calendar } from "@/components/ui/calendar";
import DataTable from "@/components/common/DataTable";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import useServiceStore from "@/stores/serviceStore";
import useAppointmentStore from "@/stores/appointmentStore";
import { Appointmentcolumns } from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentColumns";
import AppointmentRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentRow";
import { Tabs, TabsList, TabsTrigger } from "@/components/Global/ui/tabs";

const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen" />
    <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
      <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white">
        User Appointments List
      </h1>
      <Appointment />
      {/* <BusinessUserPagenation /> */}
    </main>
  </div>
);

const Appointment = () => {
  const [activeCalendar, setActiveTab] = useState(false);

  const displayCalendar = () => {
    setActiveTab((prev) => !prev);
  };

  const closeCalendar = () => {
    setActiveTab(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between gap-10 items-center">
        <div className="w-full md:w-96">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 focus:outline-none focus:ring-0"
            />
          </GlobalSearchBar>
        </div>

        <div className="mt-4">
          <button
            onClick={displayCalendar}
            className="border bg-black py-1.5 px-2 rounded-md"
          >
            <span className="text-white">View Calendar</span>
          </button>
        </div>
      </div>

      <CalendarDemo activeCalendar={activeCalendar} />
      <AppointmentTable closeCalendar={closeCalendar} />
    </>
  );
};

const CalendarDemo = ({ activeCalendar }) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="relative">
      {activeCalendar && (
        <div className="absolute top-0 right-0 z-50  rounded-md  p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </div>
      )}
    </div>
  );
};

const AppointmentTable = ({ closeCalendar }) => {
  const { fetchAppointment, appointments } = useAppointmentStore();
  const { services, fetchServices } = useServiceStore();
  const [activeActionId, setActiveActionId] = useState(null);

  useEffect(() => {
    fetchServices();
    fetchAppointment();
  }, []);

  return (
    <div className="mt-5 mb-5" onClick={closeCalendar}>
      <DataTable
        columns={Appointmentcolumns}
        data={appointments}
        renderRow={(item, index) => (
          <AppointmentRow
            key={item.id || index}
            appointment={item}
            services={services}
            activeActionId={activeActionId}
            setActiveActionId={setActiveActionId}
          />
        )}
      />
    </div>
  );
};

export default BusinessAppointmentContainer;
