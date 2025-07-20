import { useEffect, useState } from "react";
import GlobalSearchBar from "../../components/Global/Common/GlobalSearchBar";
import DataTable from "../../components/Global/Common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";
import { Link } from "react-router-dom";
import useAppointment from "../../stores/appointmentStore";
import useBusinessStore from "../../stores/businessStore";

// Layout Component
const DashboardLayout = ({
  children,
}) => (
  <div className="flex">
    <aside className="h-screen md);

// Main Page Component
const AllBusiness = () => {
  const { businesses, fetchBusinesses } = useBusinessStore();
  const { fetchAppointment, appointments } = useAppointment();
  const [activeActionId, setActiveActionId] = useState(null);

  useEffect(() => {
    fetchBusinesses();
    fetchAppointment();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="w-1/2">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="block w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 text-sm text-gray-900 focus);
};

// Separated Table Component
const BusinessTable = ({
  businesses,
  appointments,
  activeActionId,
  setActiveActionId,
}) => (
  <div className="mt-5">
    <DataTable
      columns={columns}
      data={businesses}
      renderRow={(item) => (
        <BusinessRow
          key={item.id}
          business={item}
          appointments={appointments}
          activeActionId={activeActionId}
          setActiveActionId={setActiveActionId}
        />
      )}
    />
  </div>
);

export default AllBusiness;
