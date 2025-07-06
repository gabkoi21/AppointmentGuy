import React, { useEffect, useState } from "react";
import AdminHeaderNav from "../components/Admin/AdminRoutes/AdminHeaderNav";
import SidebarNavLink from "../components/Admin/AdminRoutes/SidebarNavLink";
import SidebarBusinessDropdown from "../components/Admin/AdminRoutes/SideBarNavDropdown";
import SidebarNavDropdown from "../components/Admin/AdminRoutes/SidebarSubMenu.jsx";
import { NAV_ITEMS } from "../components/BusinessAdmin/BusinessRoutes/BusinessNavItems";
import useBusinessStore from "@/stores/businessStore";

const BusinessAdminNav = () => {
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const { currentBusiness, getBusinessByAdmid } = useBusinessStore();

  // Fetch the current business when the component mounts
  useEffect(() => {
    getBusinessByAdmid();
  }, []);

  // Destructure the name from the currentBusiness object

  const { name } = currentBusiness || {};

  return (
    <header>
      <AdminHeaderNav />
      <nav className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-1/5 overflow-y-auto bg-red-950">
        <div className="block w-full px-3">
          <ul className="mt-5 flex flex-col whitespace-nowrap ps-0 font-roboto">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="mb-4 ps-2 lg:mb-8 lg:pe-1 lg:ps-0">
                {item.subItems ? (
                  <>
                    <div>
                      <SidebarNavDropdown
                        item={item}
                        onClick={() =>
                          setShowBusinessDropdown(!showBusinessDropdown)
                        }
                      />
                    </div>
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
        </div>
      </nav>
    </header>
  );
};

export default BusinessAdminNav;
