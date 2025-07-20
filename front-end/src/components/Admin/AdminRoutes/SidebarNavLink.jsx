import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";

const SidebarNavLink = ({ to, icon, label, ariaLabel }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center p-0 lg:px-2 ${
          isActive ? "text-md bg-white text-green-950" : "text-md text-gray-100"
        }`
      }
      aria-label={ariaLabel}
    >
      <Icon
        path={icon}
        size={0.8}
        title={label}
        className="mr-2 inline-block text-black"
      />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarNavLink;
