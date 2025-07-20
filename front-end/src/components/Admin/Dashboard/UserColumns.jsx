// This file defines the columns for the user table in the admin dashboard.
// Each column has a header for display and an accessor to get the data.

export const Usercolumns = [
  {
    key: "name",
    header: "Name",
    accessor: "name",
    className: "px-6 py-3 text-left text-sm font-medium text-gray-900",
  },
  {
    key: "email",
    header: "Email",
    accessor: "email",
    className: "px-6 py-3 text-left text-sm text-gray-500",
  },
  {
    key: "role",
    header: "Role",
    accessor: "role",
    className: "px-6 py-3 text-left text-sm text-gray-500",
  },
  {
    key: "associated_salon",
    header: "Associated Salon",
    accessor: "associated_salon",
    className: "px-6 py-3 text-left text-sm text-gray-500",
  },
  {
    key: "status",
    header: "Status",
    accessor: "status",
    className: "px-6 py-3 text-left text-sm text-gray-500",
  },
  {
    key: "actions",
    header: "Actions",
    accessor: "actions",
    className: "px-6 py-3 text-center text-sm text-gray-500",
  },
];
