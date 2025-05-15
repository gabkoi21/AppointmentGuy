import React, { useEffect } from "react";
import DataTable from "@/components/common/DataTable";
import { BusinessUsercolumns } from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserColumns";
import BusinessUserRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserRow";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import useUserStore from "@/stores/UserStore";

const BusinessUserContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    {/* Sidebar for navigation */}
    <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
      <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white mb-3">
        Manage your registered User
      </h1>
      <BusinessUser />
      <BusinessUserTable />
    </main>
  </div>
);

// This component is for the business user page
const BusinessUser = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="w-1/2">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
            />
          </GlobalSearchBar>
        </div>
        <div className="mt-4">
          <button className="flex items-center gap-2 px-4 py-2 whitespace-nowrap bg-black text-white border rounded-md">
            Add Business User
          </button>
        </div>
      </div>
    </>
  );
};

// This component is for the business user table
const BusinessUserTable = () => {
  const { users, fetchUser } = useUserStore();

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUser();
  }, []);

  // Filter users based on the status filter and user type
  const filteredUsers = users?.filter((u) => u.user_type !== "business_admin");

  return (
    <div className="mt-5">
      <DataTable
        columns={BusinessUsercolumns}
        data={filteredUsers}
        renderRow={(item) => <BusinessUserRow key={item.id} user={item} />}
      />
    </div>
  );
};

export default BusinessUserContainer;
