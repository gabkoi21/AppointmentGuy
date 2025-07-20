import { useEffect, useState } from "react";
import BusinessUserRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserRow";
import { BusinessUserColumn } from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserColumn";
import GlobalSearchBar from "@/components/common/GlobalSearchBar.jsx";
import DataTable from "@/components/common/DataTable.jsx";
import { Link } from "react-router";

import useUserStore from "@/stores/userStore";

const BusinessUserContainer = () => (
  <div className="flex">
    <aside className="h-screen md:w-[20%] lg:w-[23%]" />
    <main className="mx-3 mt-20 w-full px-4 md:w-[98%]">
      <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white">
        Customers List
      </h1>
      <BusinessUser />
      <BusinessUserTable />
      <BusinessUserPagenation />
    </main>
  </div>
);

const BusinessUser = () => {
  return (
    <div className="mb-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="w-full md:w-96">
          <GlobalSearchBar>
            <input
              placeholder="Search user"
              className="w-[130%] rounded-md border border-gray-300 py-2 pl-10 text-sm focus:border-gray-300 focus:outline-none focus:ring-0 dark:bg-white dark:text-white"
            />
          </GlobalSearchBar>
        </div>
      </div>
    </div>
  );
};

const BusinessUserTable = () => {
  const { users, loading, error, fetchUser } = useUserStore();
  const [activeActionId, setActiveActionId] = useState(null);

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const filteredUsers = users?.filter((u) => u.user_type !== "business_admin");
  return (
    <div className="mb-4">
      <DataTable
        columns={BusinessUserColumn}
        data={filteredUsers}
        renderRow={(user) => (
          <BusinessUserRow
            key={user.id}
            user={user}
            activeActionId={activeActionId}
            setActiveActionId={setActiveActionId}
          />
        )}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default BusinessUserContainer;

const BusinessUserPagenation = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-md font-bold text-gray-600">
        <p>Showing 1 - 10 out of 50</p>
      </div>

      {/* Pagination */}
      <div>
        <ul className="flex rounded-sm border bg-white py-1.5 shadow-sm">
          <li>
            <Link
              className="rounded-bt rounded-r-none rounded-tr-none px-3 py-2 text-gray-700 transition hover:bg-blue-600 hover:text-white"
              to="#"
              aria-label="Previous"
            >
              Prev
            </Link>
          </li>
          <li>
            <Link
              className="r bg-blue-600 px-4 py-2 font-medium text-white"
              to="#"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 text-gray-700 transition hover:bg-blue-600 hover:text-white"
              to="#"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              className="bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-blue-600 hover:text-white"
              to="#"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              className="rounded-none px-3 py-2 text-gray-700 transition hover:bg-blue-600 hover:text-white"
              to="#"
              aria-label="Next"
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
