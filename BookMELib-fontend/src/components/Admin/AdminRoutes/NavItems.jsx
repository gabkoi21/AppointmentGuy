import {
  mdiViewDashboard,
  mdiOfficeBuilding,
  mdiAccountGroup,
  mdiCalendarCheck,
  mdiCog,
} from "@mdi/js";

// Navigation configuration with dropdown for Business Management
export const NAV_ITEMS = [
  {
    to: "Admindashboard",
    label: "Dashboard",
    icon: mdiViewDashboard,
    ariaLabel: "Dashboard",
  },
  {
    to: "business",
    label: "Business Management",
    icon: mdiOfficeBuilding,
    ariaLabel: "Business Management",
    subItems: [
      {
        to: "allbusiness",
        label: "View Businesses",
        ariaLabel: "View Business",
      },
      {
        to: "addbusiness",
        label: "Add Business",
        ariaLabel: "Add Business",
      },

      // Add more sub-items as needed...
    ],
  },
  {
    to: "usermanagement",
    label: "User Management",
    icon: mdiAccountGroup,
    ariaLabel: "User Management",
  },

  {
    to: "settings",
    label: "Settings",
    icon: mdiCog,
    ariaLabel: "Settings",
  },
];
