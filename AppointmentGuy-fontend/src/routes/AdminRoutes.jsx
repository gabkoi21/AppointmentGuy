import React, { useState } from "react";
import AdminHeaderNav from "../components/Global/AdminHeaderNav";
import { NAV_ITEMS } from "../components/Admin/AdminRoutes/NavItems";
import SidebarNavLink from "../components/Admin/AdminRoutes/SidebarNavLink";
import SidebarBusinessDropdown from "../components/Admin/AdminRoutes/BusinessSideBarNavDropdown";
import SidebarNavDropdown from "../components/Admin/AdminRoutes/SidebarSubMenu";

export const AdminNav = () => {
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);

  return (
    <>
      {/* Fixed Top Header (height: 3.5rem = h-14) */}
      <AdminHeaderNav />

      {/* Sidebar: matches top & height with header (top-14, height: 100vh - 3.5rem) */}
      <nav className="fixed top-14 left-0 w-1/5 h-[calc(100vh-3.5rem)] bg-red-950 overflow-y-auto">
        <ul className="flex flex-col mt-5 ps-0 font-roboto whitespace-nowrap">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="mb-4 ps-2 lg:mb-8 lg:pe-1 lg:ps-0">
              {item.subItems ? (
                <>
                  <SidebarNavDropdown
                    item={item}
                    onClick={() =>
                      setShowBusinessDropdown(!showBusinessDropdown)
                    }
                  />
                  {showBusinessDropdown && (
                    <SidebarBusinessDropdown
                      parentTo={item.to}
                      subItems={item.subItems}
                    />
                  )}
                </>
              ) : (
                <SidebarNavLink
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  ariaLabel={item.ariaLabel}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
