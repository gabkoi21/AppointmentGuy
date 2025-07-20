import {
  mdiViewDashboard,
  mdiOfficeBuilding,
  mdiAccountGroup,
  mdiCog,
} from "@mdi/js";

// Navigation configuration with dropdown for Business Management
export const NavLinks = [
  {
    to: "/Admindashboard",
    label: "Dashboard ",
    icon: mdiViewDashboard,
    ariaLabel: "Dashboard",
  },

  {
    to: "/Admindashboard/business",
    label: "Business Management",
    icon: mdiOfficeBuilding,
    ariaLabel: "Business Management",
  },

  {
    to: "/Admindashboard/usermanagement",
    label: "User Management",
    icon: mdiAccountGroup,
    ariaLabel: "User Management",
  },

  {
    to: "/Admindashboard/settings",
    label: "Settings",
    icon: mdiCog,
    ariaLabel: "Settings",
  },
];
