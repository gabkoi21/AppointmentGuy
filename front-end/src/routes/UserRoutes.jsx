// External Dependencies
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import useAuthStore from "@/stores/authStore";
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
    to,
    label,
    ariaLabel,
  },
];

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#f3e7e8] bg-white px-10 py-3 shadow-sm">
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
                      : "text-[#1b0e0e] hover))}
          </nav>
        </div>

        <div className="flex flex-1 justify-end gap-8">
          {/* Search Input */}
          <label className="flex h-10 min-w-40 max-w-64 flex-col">
            <div className="flex h-full w-full items-stretch rounded-lg shadow-inner">
              <span className="flex items-center justify-center rounded-l-lg bg-[#f3e7e8] pl-4 text-[#994d51]">
                <Icon
                  path={mdiMagnify}
                  size={0.9}
                  className="cursor-pointer text-[#994d51]"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="form-input h-full w-full flex-1 rounded-lg rounded-l-none border-none bg-[#f3e7e8] px-4 pl-2 text-base font-normal leading-normal text-[#1b0e0e] placeholder) => setIsOpen(false)} />}
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
      to,
      icon,
      label,
    },
    {
      to,
      icon,
      label,
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-56 rounded-lg border border-[#e7d0d1] bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-[#e7d0d1] bg-[#f3e7e8] px-4 py-3">
        <h3 className="font-semibold text-[#1b0e0e]">Account</h3>
        <button
          onClick={onClose}
          className="text-[#994d51] transition hover, icon, label }) => (
          <li key={label}>
            <NavLink
              to={to}
              className="flex items-center px-4 py-2 text-[#1b0e0e] transition hover))}
        <li className="mt-2 border-t border-[#e7d0d1] pt-2">
          <button
            onClick={logout}
            className="flex w-full items-center px-4 py-2 text-[#994d51] transition hover);
};
