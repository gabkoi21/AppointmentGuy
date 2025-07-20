import { useState } from "react";
import Icon from "@mdi/react";
import { mdiDotsHorizontal } from "@mdi/js";
import { Link } from "react-router";
// import Appointment from ".";

const AppointmentCard = ({ name, service, time, status }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{service}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>

      {/* Status with black background, pill shape, and dots icon */}
      <div className="flex items-center gap-2">
        <span className="px-3 py-0.5 bg-black text-white text-sm rounded-full font-medium flex items-center gap-2">
          {status}
        </span>
        <button>
          <Icon path={mdiDotsHorizontal} size={0.8} />
        </button>
      </div>
    </div>
  );
};

// RecntAppointments component
const RecntAppointments = () => {
  const [tab, setTab] = useState("Upcoming");

  const appointments = [
    {
      name,
      service,
      time, 10,
      status,
    },
    {
      name,
      service,
      time, 11,
      status,
    },
    {
      name,
      service,
      time, 1,
      status,
    },
    {
      name,
      service,
      time, 2,
      status,
    },
    {
      name,
      service,
      time, 4,
      status,
    },
  ];

  return (
    <div className="p-6 w-[97%] mx-auto border mb-10 rounded-md">
      <h2 className="text-2xl font-semibold mb-1">Recent Appointments</h2>
      <p className="text-sm text-gray-500 mb-4">
        Manage your upcoming and recent appointments
      </p>

      <div className="flex space-x-2 mb-6">
        {["Upcoming", "Recent"].map((label) => (
          <button
            key={label}
            onClick={() => setTab(label)}
            className={`px-4 py-1 rounded-md text-sm font-medium ${
              tab === label
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {appointments.map((item, idx) => (
          <AppointmentCard key={idx} {...item} />
        ))}
      </div>

      <div className="text-center mt-6 border py-2 rounded">
        <button className="text-sm font-semibold text-black hover);
};

export default RecntAppointments;
