import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccount, mdiClose, mdiCog, mdiLogoutVariant } from "@mdi/js";
import useAuthStore from "../../stores/authStore";

const AdminHeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 flex w-full h-14 bg-white shadow-md items-center px-4">
        <div className="ml-auto relative">
          <button
            className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f3e7e8] text-[#994d51] hover:bg-[#e5cfd1] shadow transition"
            aria-label="Profile"
            onClick={toggleDropdown}
          >
            <Icon path={mdiAccount} size={0.8} />
          </button>
          {isOpen && <ProfileDropdown onClose={() => setIsOpen(false)} />}
        </div>
      </nav>
    </header>
  );
};

export default AdminHeaderNav;

const ProfileDropdown = ({ onClose }) => {
  const logout = () => {
    useAuthStore.getState().logout();
    onClose();
  };

  const menuItems = [
    {
      to: "/userdashboard/userprofile",
      icon: mdiAccount,
      label: "Profile",
    },
    {
      to: "/userdashboard/settings",
      icon: mdiCog,
      label: "Settings",
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white border border-[#e7d0d1] rounded-lg shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 bg-[#f3e7e8] border-b border-[#e7d0d1]">
        <h3 className="text-[#1b0e0e] font-semibold">Account</h3>
        <button
          onClick={onClose}
          className="text-[#994d51] hover:text-[#ea2832] transition"
        >
          <Icon path={mdiClose} size={0.8} />
        </button>
      </div>
      <ul className="py-2">
        {menuItems.map(({ to, icon, label }) => (
          <li key={label}>
            <NavLink
              to={to}
              className="flex items-center px-4 py-2 text-[#1b0e0e] hover:bg-[#f3e7e8] transition"
            >
              <Icon path={icon} size={0.8} className="mr-2" />
              <span className="text-sm">{label}</span>
            </NavLink>
          </li>
        ))}
        <li className="border-t border-[#e7d0d1] mt-2 pt-2">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-[#994d51] hover:bg-[#f3e7e8] transition"
          >
            <Icon path={mdiLogoutVariant} size={0.8} className="mr-2" />
            <span className="text-sm">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
