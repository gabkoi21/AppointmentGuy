// components/AdminComponent/SidebarDropdown.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const BusinessSidebarDropdown = ({ parentTo, subItems }) => {
  return (
    <ul className="ml-6 mt-2">
      {subItems.map((subItem) => (
        <li key={subItem.to} className="mb-2">
          <NavLink
            to={`${parentTo}/${subItem.to}`}
            className={({ isActive }) =>
              `block p-1 pl-3 ${
                isActive
                  ? "border-l-4 bg-gray-200 text-green-950"
                  : "text-black"
              }`
            }
            aria-label={subItem.ariaLabel}
          >
            {subItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default BusinessSidebarDropdown;
