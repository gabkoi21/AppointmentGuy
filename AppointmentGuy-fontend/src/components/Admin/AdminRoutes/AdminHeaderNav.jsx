import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccount, mdiClose, mdiCog, mdiLogoutVariant } from "@mdi/js";
import useAuthStore from "../../../stores/authStore";

const AdminHeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center bg-white px-4 shadow-md">
        <div className="relative ml-auto">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3e7e8] text-[#994d51] shadow transition hover:bg-[#e5cfd1]"
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
    <div className="absolute right-0 mt-2 w-56 rounded-lg border border-[#e7d0d1] bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-[#e7d0d1] bg-[#f3e7e8] px-4 py-3">
        <h3 className="font-semibold text-[#1b0e0e]">Account</h3>
        <button
          onClick={onClose}
          className="text-[#994d51] transition hover:text-[#ea2832]"
        >
          <Icon path={mdiClose} size={0.8} />
        </button>
      </div>
      <ul className="py-2">
        {menuItems.map(({ to, icon, label }) => (
          <li key={label}>
            <NavLink
              to={to}
              className="flex items-center px-4 py-2 text-[#1b0e0e] transition hover:bg-[#f3e7e8]"
            >
              <Icon path={icon} size={0.8} className="mr-2" />
              <span className="text-sm">{label}</span>
            </NavLink>
          </li>
        ))}
        <li className="mt-2 border-t border-[#e7d0d1] pt-2">
          <button
            onClick={logout}
            className="flex w-full items-center px-4 py-2 text-[#994d51] transition hover:bg-[#f3e7e8]"
          >
            <Icon path={mdiLogoutVariant} size={0.8} className="mr-2" />
            <span className="text-sm">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeaderNav;
