import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiCrown, mdiBellOutline } from "@mdi/js";
import AdminHeaderNav from "../components/Global/AdminHeaderNav";
import SidebarNavLink from "../components/Admin/AdminRoutes/SidebarNavLink";
import SidebarBusinessDropdown from "../components/Admin/AdminRoutes/BusinessSideBarNavDropdown";
import SidebarNavDropdown from "../components/Admin/AdminRoutes/SidebarSubMenu.jsx";
import { NAV_ITEMS } from "../components/BusinessAdmin/BusinessRoutes/BusinessNavItems";
import { Link } from "react-router";
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
      <nav className="fixed top-14 left-0 w-1/5 h-[calc(100vh-3.5rem)] bg-red-950 overflow-y-auto">
        <div className="block w-full px-3">
          <ul className="flex flex-col mt-5 ps-0 font-roboto whitespace-nowrap">
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
