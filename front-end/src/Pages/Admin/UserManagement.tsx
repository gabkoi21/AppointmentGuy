import { useEffect, useState } from "react";
import UserRow from "../../components/Admin/Dashboard/UsersRow";
import { Usercolumns } from "../../components/Admin/Dashboard/UserColumns";
import DataTable from "../../components/Global/Common/DataTable";
import GlobalSearchBar from "../../components/Global/Common/GlobalSearchBar";
import useUserStore from "../../stores/userStore";

// ---------- User type ----------
interface User {
  first_name?: string;
  last_name?: string;
  email?: string;
  user_type: string;
  business?: any;
  status: any;
  id: number;
}

// ---------- UserManagementContainer component ----------
const UserManagementContainer = () => {
  return (
    <div className="flex">
      <aside className="h-screen md:w-[20%] lg:w-[23%]" />
      <main className="mx-3 mt-14 w-full px-3 md:w-[98%]">
        {/* Global search bar */}
        <div className="w-1/2">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="block w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-white dark:text-white"
            />
          </GlobalSearchBar>
        </div>
        <UserTable />
      </main>
    </div>
  );
};

// ---------- UserTable component ----------
const UserTable = () => {
  const { users, fetchUser } = useUserStore();
  const [activeActionId, setActiveActionId] = useState<number | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="mb-4">
      <DataTable<User>
        data={users || []}
        columns={Usercolumns}
        renderRow={(user: User) => (
          <UserRow
            key={user.id}
            user={user}
            activeActionId={activeActionId}
            setActiveActionId={setActiveActionId}
          />
        )}
      />
    </div>
  );
};

export default UserManagementContainer;
