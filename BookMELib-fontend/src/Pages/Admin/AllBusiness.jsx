import { from } from "list";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import GlobalButton from "../../components/common/globalButton";
import GlobalFilter from "../../components/common/globalFilter";
import DataTable from "../../components/common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";
import { businessData } from "../../data/BusinesseData";
import SearchBusiness from "../../components/Admin/Dashboard/SearchBusinessStatus";
import { useState } from "react";

const AllBusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <AllBusiness />
    </main>
  </div>
);

const AllBusiness = () => {
  return (
    <div>
      <p>This is all businees Page</p>
      {/* <SearchBusiness /> */}
      <GlobalFilter />
      <GlobalSearchBar />
    </div>
  );
};

export default AllBusinessContainer;
