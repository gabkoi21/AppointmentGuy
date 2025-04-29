import { useEffect, useState } from "react";
import UserRow from "@/components/Admin/Dashboard/UsersRow";
import { Usercolumns } from "@/components/Admin/Dashboard/UserColumns";
import DataTable from "@/components/common/DataTable";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import useUserStore from "@/stores/UserStore";
import UserPaginationFooter from "@/components/Admin/Dashboard/UserPaginationFooter";

// This is the general container for the user  management page
const UserManagementContainer = () => (
  <div className="flex">
    <aside className="hidden md:block md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
        Manage Users & View Data
      </h1>
      <UserManagement />
      <UserPaginationFooter />
    </main>
  </div>
);

// Ths is to manage user si in this the user is fecth and the other state are also call
const UserManagement = () => {
  const { users, loading, error, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="w-full md:w-96">
          <GlobalSearchBar>
            <input
              placeholder="Search user"
              className="w-[130%] py-2 pl-10 text-sm rounded-md border border-gray-300 dark:bg-white dark:text-white"
            />
          </GlobalSearchBar>
        </div>
      </div>
      <UserTable users={users} loading={loading} error={error} />
    </div>
  );
};

// This is the table to display the user so in here all the user is pass in the data and the column
const UserTable = ({ users, loading, error, statusFilter }) => {
  const filteredUsers = users?.filter(
    (u) =>
      u.user_type !== "super_admin" &&
      (!statusFilter || u.status === statusFilter)
  );
  return (
    <div>
      <DataTable
        columns={Usercolumns}
        data={filteredUsers}
        renderRow={(user) => <UserRow key={user.id} users={user} />}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default UserManagementContainer;
