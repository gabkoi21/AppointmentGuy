import ComponentAriaChart from "@/components/BusinessAdmin/BusinessDashboard/AppointmentLineChart";
import ComponentServices from "@/components/BusinessAdmin/BusinessDashboard/ServiceDonutChart";
import RecntAppointments from "@/components/BusinessAdmin/BusinessDashboard/RecntAppointment";

import Icon from "@mdi/react";
import {
  mdiCalendarCheck,
  mdiAccountPlus,
  mdiCurrencyUsd,
  mdiCancel,
} from "@mdi/js";

const BusinessAdminContainer = () => {
  return (
    <div className="flex">
      <aside className="md:w-[20%] lg:w-[23%] h-screen " />
      <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
        <Dashboard />
        <RecntAppointments />
        <Copyright />
      </main>
    </div>
  );
};

const stats = [
  {
    label: "Total Appointments",
    value: "1.2k",
    change: "+5%",
    icon: mdiCalendarCheck,
    color: "#3B82F6", // blue
  },
  {
    label: "New Clients",
    value: "300",
    change: "+10%",
    icon: mdiAccountPlus,
    color: "#10B981", // green
  },
  {
    label: "Revenue",
    value: "$12k",
    change: "-2%",
    icon: mdiCurrencyUsd,
    color: "#F59E0B", // amber
  },
  {
    label: "Cancellations",
    value: "15",
    change: "+1%",
    icon: mdiCancel,
    color: "#EF4444", // red
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-2xl shadow flex items-center gap-4"
          >
            <div
              className="p-2 rounded-full"
              style={{ backgroundColor: `${stat.color}1A` }} // subtle background tint
            >
              <Icon path={stat.icon} size={1} color={stat.color} />
            </div>
            <div>
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

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Appointment Trends</h3>
          <ComponentAriaChart />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Visitors Overview</h3>
          <ComponentServices />
        </div>
      </div>
    </div>
  );
};

const Copyright = () => (
  <div className="ml-5">
    <span style={{ fontSize: "14px", color: "#666", fontWeight: "lighter" }}>
      © 2025 Appointmentguy
    </span>
  </div>
);

export default BusinessAdminContainer;
