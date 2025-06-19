// components/AdminComponent/SidebarNavLink.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";

const SidebarNavLink = ({ to, icon, label, ariaLabel }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-0 lg:px-2 ${
          isActive
            ? "text-gray-950 font-bold text-xl border-l-4"
            : "text-gray-400 text-md"
        }`
      }
      aria-label={ariaLabel}
    >
      <Icon
        path={icon}
        size={0.8}
        title={label}
        className="mr-2 inline-block"
      />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarNavLink;
