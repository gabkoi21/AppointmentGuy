import { useEffect, useState } from "react";
import BusinessUserRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserRow";
import { BusinessUserColumn } from "@/components/BusinessAdmin/BusinessDashboard/BusinessUserColumn";
import GlobalSearchBar from "@/components/common/GlobalSearchBar.jsx";
import DataTable from "@/components/common/DataTable.jsx";
import { Link } from "react-router";

import useUserStore from "@/stores/userStore";

const BusinessUserContainer = () => (
  <div className="flex">
    <aside className="h-screen md);

const BusinessUser = () => {
  return (
    <div className="mb-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="w-full md);
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
              className="rounded-bt rounded-r-none rounded-tr-none px-3 py-2 text-gray-700 transition hover);
};
