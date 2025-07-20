import { useEffect, useState } from "react";
import UserRow from "../../components/Admin/Dashboard/UsersRow";
import { Usercolumns } from "../../components/Admin/Dashboard/UserColumns";
import DataTable from "../../components/Global/Common/DataTable";
import GlobalSearchBar from "../../components/Global/Common/GlobalSearchBar";
import useUserStore from "../../stores/userStore";

// ---------- User type ----------

// ---------- UserManagementContainer component ----------
const UserManagementContainer = () => {
  return (
    <div className="flex">
      <aside className="h-screen md);
};

// ---------- UserTable component ----------
const UserTable = () => {
  const { users, fetchUser } = useUserStore();
  const [activeActionId, setActiveActionId] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="mb-4">
      <DataTable<User>
        data={users || []}
        columns={Usercolumns}
        renderRow={(user) => (
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
