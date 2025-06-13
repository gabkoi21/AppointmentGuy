import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import React from "react";

// This is the layout for the login and register
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import ProtectedRoute from "./components/Global/ProtectedRoutes";

// This is the layout for the admin
import AdminLayout from "./components/Admin/AdminRoutes/AdminLayout";
import Admindashboard from "./Pages/Admin/AdminDashBoard";
import AllBusiness from "./Pages/Admin/AllBusiness";
import Appointments from "./Pages/Admin/Appointment";
import Settings from "./Pages/Admin/setting";
import UserManagement from "./Pages/Admin/UserManagement";
import AdminProfile from "./Pages/Admin/AdminProfile";
import AddBusiness from "./Pages/Admin/AddBusiness";

// This is the layout for the business admin
import BusinessAdminLayout from "./components/BusinessAdmin/BusinessRoutes/BusinessAdminlayout";
import Dashboard from "./Pages/BusinessAdmin/Dashboard";
import Appointment from "./Pages/BusinessAdmin/Appointment";
import BusinessUser from "./Pages/BusinessAdmin/BusinessUser";

// This is the layout for the user
// import UserLayout from "./components/Customers/UserLayout";
import UserLayout from "./components/Customers/UserLayout";
import Profile from "./Pages/CustomerUser/Profile";
import Homepage from "./Pages/CustomerUser/Homepage";
import Services from "./Pages/CustomerUser/Services";
import ScheduleAppoinment from "./Pages/CustomerUser/ScheduleAppoinment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Admin Routes */}
        <Route
          path="Admindashboard"
          element={
            <ProtectedRoute allowedTypes={["super_admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="Admindashboard" />} />
          <Route path="business" element={<Outlet />}>
            <Route index element={<Navigate to="allbusiness" />} />
            <Route path="allbusiness" element={<AllBusiness />} />
            <Route path="addbusiness" element={<AddBusiness />} />
          </Route>
          <Route path="Admindashboard" element={<Admindashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="usermanagement" element={<UserManagement />} />
          <Route path="adminprofile" element={<AdminProfile />} />
        </Route>

        {/* Business Admin Routes */}
        <Route
          path="bussinessadminboard"
          element={
            <ProtectedRoute allowedTypes={["business_admin"]}>
              <BusinessAdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="usermanagement" element={<BusinessUser />} />
        </Route>

        {/* User Routes */}
        <Route
          path="userdashboard"
          element={
            <ProtectedRoute allowedTypes={["customer"]}>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="userprofile" element={<Profile />} />
          <Route
            path="bookappointment/:serviceId"
            element={<ScheduleAppoinment />}
          />
          <Route path="services/:businessId" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
