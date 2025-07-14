// External Dependencies
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import useAuthStore from "../stores/authStore";
import Icon from "@mdi/react";

import {
  mdiMagnify,
  mdiClose,
  mdiAccount,
  mdiCog,
  mdiLogoutVariant,
} from "@mdi/js";

const NAV_ITEMS = [
  {
    to: "/userdashboard/homepage",
    label: "Salons",
    ariaLabel: "Salons",
  },
];

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#f3e7e8] px-10 py-3 shadow-sm">
      <div className="flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4 text-[#1b0e0e]">
            <Link to="/userdashboard/homepage" aria-label="Home">
              <h2 className="text-xl font-extrabold leading-tight tracking-tight">
                AppointmentGuy
              </h2>
            </Link>
          </div>

          <nav className="flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-label={item.ariaLabel}
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#994d51] underline underline-offset-8"
                      : "text-[#1b0e0e] hover:text-[#994d51]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 justify-end gap-8">
          {/* Search Input */}
          <label className="flex flex-col min-w-40 max-w-64 h-10">
            <div className="flex w-full h-full items-stretch rounded-lg shadow-inner">
              <span className="flex items-center justify-center pl-4 bg-[#f3e7e8] text-[#994d51] rounded-l-lg">
                <Icon
                  path={mdiMagnify}
                  size={0.9}
                  className="text-[#994d51] cursor-pointer"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="form-input w-full flex-1 rounded-lg rounded-l-none border-none bg-[#f3e7e8] text-[#1b0e0e] px-4 pl-2 text-base font-normal leading-normal placeholder:text-[#994d51] focus:outline-0 focus:ring-2 focus:ring-[#994d51]/30 h-full"
              />
            </div>
          </label>

          {/*  */}
          <div className="relative">
            <button
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#f3e7e8] text-[#994d51] hover:bg-[#e5cfd1] transition-colors duration-200 shadow"
              aria-label="Profile"
              onClick={toggleDropdown}
            >
              <Icon path={mdiAccount} size={1} />
            </button>
            {isOpen && <ProfileDropdown onClose={() => setIsOpen(false)} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserNav;

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
