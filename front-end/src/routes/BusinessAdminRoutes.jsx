import { useEffect } from "react";
import GlobalSearchBar from "@/components/common/GlobalSearchBar";
import SidebarNavLink from "../components/Admin/AdminRoutes/SidebarNavLink";
import { NAV_ITEMS } from "../components/BusinessAdmin/BusinessRoutes/BusinessNavItems";
import useBusinessStore from "@/stores/businessStore";
import GlobalHeaderNav from "@/components/Global/Routes/GlobalHeaderNav";

const BusinessAdminNav = () => {
  const { currentBusiness, getBusinessByAdmin } = useBusinessStore();

  // Fetch the current business when the component mounts
  useEffect(() => {
    getBusinessByAdmin();
  }, [getBusinessByAdmin]);

  const { name } = currentBusiness || {};

  return (
    <header>
      <GlobalHeaderNav>
        <span className="text-3xl font-bold tracking-tight">
          {name || "Salon Name "}
        </span>
      </GlobalHeaderNav>
      <nav className="fixed left-0 h-[100vh] w-64 overflow-y-auto bg-red-950 pt-14">
        <div className="block w-full px-3">
          <ul className="mt-5 flex flex-col whitespace-nowrap ps-0 font-roboto">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="mb-4 ps-2 lg))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default BusinessAdminNav;
