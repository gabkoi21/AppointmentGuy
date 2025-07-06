import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Authentication Pages
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import ProtectedRoute from "./components/Global/Auth/ProtectedRoutes";

// Admin Routes
import AdminLayout from "./components/Admin/AdminRoutes/AdminLayout";
import Admindashboard from "./Pages/Admin/AdminDashBoard";
import AllBusiness from "./Pages/Admin/AllBusiness";
import Appointments from "./Pages/Admin/Appointment";
import Settings from "./Pages/Admin/setting";
import UserManagement from "./Pages/Admin/UserManagement";
import AdminProfile from "./Pages/Admin/AdminProfile";
import AddBusiness from "./Pages/Admin/AddBusiness";
import EditeUser from "./Pages/Admin/EditeUser";

// Business Admin Routes
import BusinessAdminLayout from "./components/BusinessAdmin/BusinessRoutes/BusinessAdminlayout";
import Dashboard from "./Pages/BusinessAdmin/Dashboard";
import Appointment from "./Pages/BusinessAdmin/Appointment";
import BusinessUser from "./Pages/BusinessAdmin/BusinessUser";

// Customer User Routes
import UserLayout from "./components/Customers/UserLayout";
import Profile from "./Pages/CustomerUser/Profile";
import Homepage from "./Pages/CustomerUser/Homepage";
import Services from "./Pages/CustomerUser/Services";
import ScheduleAppoinment from "./Pages/CustomerUser/ScheduleAppoinment";

const router = createBrowserRouter([
  // Authentication Pages
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "register",
    element: <Register />,
  },

  // Admin Routes
  {
    path: "Admindashboard",
    element: (
      <ProtectedRoute allowedTypes={["super_admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),

    children: [
      { index: true, element: <Admindashboard /> },

      {
        path: "business",
        children: [
          { index: true, element: <AllBusiness /> },
          { path: "allbusiness", element: <AllBusiness /> },
          { path: "addbusiness", element: <AddBusiness /> },
        ],
      },

      { path: "appointments", element: <Appointments /> },
      { path: "settings", element: <Settings /> },
      { path: "usermanagement", element: <UserManagement /> },
      { path: "adminprofile", element: <AdminProfile /> },
      { path: "edituser", element: <EditeUser /> },
    ],
  },

  // Business Admin Routes
  {
    path: "bussinessadminboard",

    element: (
      <ProtectedRoute allowedTypes={["business_admin"]}>
        <BusinessAdminLayout />
      </ProtectedRoute>
    ),

    children: [
      { index: true, element: <Dashboard /> },

      { path: "dashboard", element: <Dashboard /> },
      { path: "appointment", element: <Appointment /> },
      { path: "usermanagement", element: <BusinessUser /> },
    ],
  },

  // Customer User Routes
  {
    path: "userdashboard",
    element: (
      <ProtectedRoute allowedTypes={["customer"]}>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Homepage /> },

      { path: "homepage", element: <Homepage /> },
      { path: "userprofile", element: <Profile /> },
      { path: "bookappointment/:serviceId", element: <ScheduleAppoinment /> },
      { path: "services/:businessId", element: <Services /> },
    ],
  },
]);

export default router;
