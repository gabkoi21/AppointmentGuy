import React, { useEffect, useState } from "react";

import { Calendar } from "@/components/Global/ui/calendar";
import DataTable from "@/components/common/DataTable.jsx";
import GlobalSearchBar from "@/components/common/GlobalSearchBar.jsx";
import useServiceStore from "@/stores/serviceStore";
import useAppointmentStore from "../../stores/appointmentStore";
import { Appointmentcolumns } from "../../components/BusinessAdmin/BusinessDashboard/BusinessAppointmentColumns";
import AppointmentRow from "../../components/BusinessAdmin/BusinessDashboard/BusinessAppointmentRow";

const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="h-screen md);

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
        <div className="w-full md);
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
