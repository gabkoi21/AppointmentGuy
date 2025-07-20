import React, { useEffect, useState } from "react";

import { Calendar } from "@/components/Global/ui/calendar";
import DataTable from "@/components/common/DataTable.jsx";
import GlobalSearchBar from "@/components/common/GlobalSearchBar.jsx";
import useServiceStore from "@/stores/serviceStore";
import useAppointmentStore from "../../stores/appointmentStore";
import { Appointmentcolumns } from "../../components/BusinessAdmin/BusinessDashboard/BusinessAppointmentColumns";
import AppointmentRow from "../../components/BusinessAdmin/BusinessDashboard/BusinessAppointmentRow";

const BusinessAppointmentContainer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-6">
        <Appointment />
      </main>
    </div>
  );
};

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
      <div className="flex flex-row items-center justify-between gap-10 mb-6">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600">Manage your business appointments</p>
        </div>
        <div className="flex gap-4">
          <GlobalSearchBar />
          <button
            onClick={displayCalendar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {activeCalendar ? 'Hide Calendar' : 'Show Calendar'}
          </button>
        </div>
      </div>
      
      <CalendarDemo activeCalendar={activeCalendar} />
      <AppointmentTable closeCalendar={closeCalendar} />
    </>
  );
};

// CalendarDemo component to display the calendar
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

// AppointmentTable component to display the appointment data
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
