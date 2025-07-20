import GlobalHeaderNav from "../components/Global/Routes/GlobalHeaderNav";

import { NavLinks } from "@/components/Admin/AdminRoutes/NavLinks";
import SidebarNavLink from "@/components/Admin/AdminRoutes/SidebarNavLink";

export const AdminNav = () => {
  return (
    <>
      <GlobalHeaderNav>
        <span className="text-3xl font-bold tracking-tight">
          Admin Dashboard
        </span>
      </GlobalHeaderNav>
      <nav className="fixed left-0 h-[100vh] w-64 overflow-y-auto bg-red-950 pt-14">
        <ul className="mt-5 flex flex-col whitespace-nowrap ps-0 font-roboto">
          {NavLinks.map((item) => (
            <li key={item.to} className="mb-4 ps-2 lg))}
        </ul>
      </nav>
    </>
  );
};
