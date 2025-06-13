import { useEffect, useState } from "react";
import BusinessUserRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserRow";
import { BusinessUserColumn } from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserColumn";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import DataTable from "@/components/common/DataTable";
import { Link } from "react-router";

import useUserStore from "@/stores/userStore";

const BusinessUserContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen " />
    <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
      <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white ">
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
    <div className="space-y-4  mb-4">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="w-full md:w-96">
          <GlobalSearchBar>
            <input
              placeholder="Search user"
              className="w-[130%] py-2 pl-10 text-sm rounded-md border border-gray-300 dark:bg-white dark:text-white focus:outline-none focus:ring-0 focus:border-gray-300"
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
    <div className="flex items-center justify-between ">
      <div className="text-gray-600 text-md font-bold">
        <p>Showing 1 - 10 out of 50</p>
      </div>

      {/* Pagination */}
      <div>
        <ul className="flex border rounded-sm py-1.5 bg-white shadow-sm">
          <li>
            <Link
              className="px-3 rounded-r-none rounded-tr-none rounded-bt  py-2 text-gray-700 hover:bg-blue-600 hover:text-white transition"
              to="#"
              aria-label="Previous"
            >
              Prev
            </Link>
          </li>
          <li>
            <Link
              className="px-4 r py-2 bg-blue-600 text-white font-medium"
              to="#"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2  text-gray-700 hover:bg-blue-600 hover:text-white transition"
              to="#"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
              to="#"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-2 rounded-none text-gray-700 hover:bg-blue-600 hover:text-white transition"
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
