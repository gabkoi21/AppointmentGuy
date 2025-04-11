import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const TableBottomNavigation = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-5 ml-1">
        <div>
          <p className="text-md text-gray-500">
            Showing <span className="font-bold text-gray-600">1-5</span> of{" "}
            <span className="font-bold text-gray-600">100</span> businesses
          </p>
        </div>

        <div className="flex gap-4">
          <button className=" border px-2.5 py-0.5 rounded-md">
            <Icon path={mdiChevronLeft} size={1} />
          </button>
          <button className=" border px-2.5 py-0.5 rounded-md">1</button>
          <button className=" border px-2.5 py-0.5 rounded-md">2</button>
          <button className=" border px-2.5 py-0.5 rounded-md">3</button>
          <button className=" border px-2.5 py-0.5 rounded-md">
            <Icon path={mdiChevronRight} size={1} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TableBottomNavigation;
