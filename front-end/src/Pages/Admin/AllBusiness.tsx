import { useEffect, useState } from "react";
import GlobalSearchBar from "../../components/Global/Common/GlobalSearchBar";
import DataTable from "../../components/Global/Common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";
import { Link } from "react-router-dom";
import useAppointment from "../../stores/appointmentStore";
import useBusinessStore from "../../stores/businessStore";

// Layout Component
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex">
    <aside className="h-screen md:w-[20%] lg:w-[23%]" />
    <main className="mx-3 mt-14 w-full px-3 md:w-[98%]">{children}</main>
  </div>
);

// Main Page Component
const AllBusiness = () => {
  const { businesses, fetchBusinesses } = useBusinessStore();
  const { fetchAppointment, appointments } = useAppointment();
  const [activeActionId, setActiveActionId] = useState<number | null>(null);

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
              className="block w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-white dark:text-white"
            />
          </GlobalSearchBar>
        </div>
        <div>
          <Link to="/Admindashboard/addbusiness">
            <button className="mt-4 rounded-md bg-black px-4 py-2 text-white hover:bg-blue-700">
              Add Business
            </button>
          </Link>
        </div>
      </div>

      {/* Separated Table Section */}
      <BusinessTable
        businesses={businesses}
        appointments={appointments}
        activeActionId={activeActionId}
        setActiveActionId={setActiveActionId}
      />
    </DashboardLayout>
  );
};

// Separated Table Component
const BusinessTable = ({
  businesses,
  appointments,
  activeActionId,
  setActiveActionId,
}: {
  businesses: any[];
  appointments: any[];
  activeActionId: number | null;
  setActiveActionId: (id: number | null) => void;
}) => (
  <div className="mt-5">
    <DataTable
      columns={columns}
      data={businesses}
      renderRow={(item: any) => (
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
