// import ApppintmentContainer from "../BusinessAdmin/Appointment";
import ApppintmentContainer from "../../components/BusinessAdmin/BusinessDashboard/BusinessAppointmentList";

import Icon from "@mdi/react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

import {
  mdiCalendarMonth,
  mdiCheckCircle,
  mdiCancel,
  mdiCalendarPlus,
} from "@mdi/js";

const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    <main className="md:w-[98%] w-full mx-3 px-6 mt-20">
      <AppointmentInforHeader />
      <DashboardOverview />
      <ApppintmentContainer />
    </main>
  </div>
);

// --- Header Section ---

const AppointmentInforHeader = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <div className="space-y-2 relative">
      <h1 className="text-2xl font-bold">Appointments Overview</h1>

      <div className="flex justify-between items-center relative">
        <h4 className="text-gray-700">
          Manage and monitor all appointments across the platform.
        </h4>

        <div className="relative">
          <button
            onClick={toggleCalendar}
            className="flex items-center gap-2 border px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
          >
            <Icon path={mdiCalendarMonth} size={0.9} />
            <span>April 2025</span>
          </button>

          {showCalendar && (
            <div className="absolute right-0 mt-2 z-10 bg-white shadow-lg rounded-md">
              <CalendarData />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Dashboard Stats Section ---
const stats = [
  {
    label: "Today Appointments",
    value: "1.2k",
    change: "+5%",
    icon: mdiCalendarPlus,
    color: "#3B82F6",
  },
  {
    label: "Completed Today",
    value: "300",
    change: "+10%",
    icon: mdiCheckCircle,
    color: "#10B981",
  },

  {
    label: "Cancellations Today",
    value: "15",
    change: "+1%",
    icon: mdiCancel,
    color: "#EF4444",
  },
  {
    label: "Upcoming (7 days)",
    value: "$12k",
    change: "-2%",
    icon: mdiCalendarMonth,
    color: "#F59E0B",
  },
];

const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow"
        >
          {/* Icon section with tinted background */}
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: `${stat.color}1A` }}
          >
            <Icon path={stat.icon} size={1.2} color={stat.color} />
          </div>

          {/* Stat text section */}
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h2 className="text-xl font-semibold">{stat.value}</h2>
            <span
              className={`text-sm ${
                stat.change.includes("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessAppointmentContainer;

import React from "react";

const CalendarData = () => {
  const [date, setDate] = React.useState(new Date()); // Initialize with the current date

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
