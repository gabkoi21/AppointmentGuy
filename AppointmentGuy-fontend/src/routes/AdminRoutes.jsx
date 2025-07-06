import React, { useState } from "react";
import AdminHeaderNav from "@/components/Admin/AdminRoutes/AdminHeaderNav";
import { NavLinks } from "@/components/Admin/AdminRoutes/NavLinks";
import SidebarNavLink from "@/components/Admin/AdminRoutes/SidebarNavLink";
import SidebarBusinessDropdown from "@/components/Admin/AdminRoutes/SideBarNavDropdown";
import SidebarNavDropdown from "@/components/Admin/AdminRoutes/SidebarSubMenu";

export const AdminNav = () => {
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);

  return (
    <>
      {/* Fixed Top Header (height: 3.5rem = h-14) */}
      <AdminHeaderNav />

      {/* Sidebar: matches top & height with header (top-14, height: 100vh - 3.5rem) */}
      <nav className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-1/5 overflow-y-auto bg-red-950">
        <ul className="mt-5 flex flex-col whitespace-nowrap ps-0 font-roboto">
          {NavLinks.map((item) => (
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
