import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";

const AppointmentsPagination = () => (
  //   <TableBottomNavigation>
  <div className="flex justify-between items-center mt-8 ml-1 mb-10">
    <div>
      <p className="text-md text-gray-500">
        Showing <span className="font-bold text-gray-600">1-5</span> of{" "}
        <span className="font-bold text-gray-600">2,853</span> appointments
      </p>
    </div>
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
        <Icon path={mdiChevronLeft} size={0.9} />
        Previous
      </button>
      <button className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
        Next
        <Icon path={mdiChevronRight} size={0.9} />
      </button>
    </div>
  </div>
  //   </TableBottomNavigation>
);

export default AppointmentsPagination;
