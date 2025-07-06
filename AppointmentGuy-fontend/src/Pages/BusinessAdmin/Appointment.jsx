import React, { useEffect, useState } from "react";
import BusinessUserPagenation from "./BusinessUserPagination";

import { Calendar } from "@/components/Global/ui/calendar";
import DataTable from "@/components/common/DataTable";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import useServiceStore from "@/stores/serviceStore";
import useAppointmentStore from "@/stores/appointmentStore";
import { Appointmentcolumns } from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentColumns";
import AppointmentRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentRow";
import { Tabs, TabsList, TabsTrigger } from "@/components/Global/ui/tabs";

const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="h-screen md:w-[20%] lg:w-[23%]" />
    <main className="mx-3 mt-20 w-full px-4 md:w-[98%]">
      <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white">
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
      <div className="flex flex-row items-center justify-between gap-10">
        <div className="w-full md:w-96">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="block w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 text-sm text-gray-900 focus:outline-none focus:ring-0"
            />
          </GlobalSearchBar>
        </div>

        <div className="mt-4">
          <button
            onClick={displayCalendar}
            className="rounded-md border bg-black px-2 py-1.5"
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
        <div className="absolute right-0 top-0 z-50 rounded-md p-4">
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
    <div className="mb-5 mt-5" onClick={closeCalendar}>
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
