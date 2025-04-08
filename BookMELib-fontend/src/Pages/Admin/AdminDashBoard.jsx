import SearchBusiness from "../../components/Admin/Dashboard/SearchBusiness";
import { businessData } from "../../data/BusinesseData";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import DataTable from "../../components/common/DataTable";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";

// Root container for the admin dashboard
// It contains the sidebar and the main content area
const AdmindasboardhContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <AdminDashboard />
    </main>
  </div>
);

// This component is used to render the admin dashboard
// It displays a data table with business information
const AdminDashboard = () => {
  return (
    <>
      <SearchBusiness />
      <div>
        <DataTable
          columns={columns}
          data={businessData}
          renderRow={(item, index) => (
            <BusinessRow key={index} business={item} />
          )}
        />
      </div>
    </>
  );
};

export default AdmindasboardhContainer;
