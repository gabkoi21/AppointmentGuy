import React from "react";
import { Outlet } from "react-router-dom";
import UserNav from "../../routes/UserRoutes";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserNav />
      <div className="content pt-20 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
