import { Link } from "react-router-dom";

const BusinessUserPagenation = () => {
  return (
    <div className="flex items-center justify-between mt-5 mb-5">
      <div className="text-gray-600 text-md font-bold">
        <p>Showing 1 - 10 out of 50</p>
      </div>

      <div>
        <ul className="flex border rounded-sm py-1.5 bg-white shadow-sm">
          <li>
            <Link
              className="px-3 py-2 text-gray-700 hover:bg-[#ea2832] hover:text-white transition"
              to="#"
            >
              Prev
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-[#ea2832] text-white font-medium"
              to="#"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 text-gray-700 hover:text-white hover:bg-[#ea2832] transition"
              to="#"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-[#ea2832] hover:text-white transition"
              to="#"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-2 text-gray-700 hover:bg-[#ea2832] hover:text-white transition"
              to="#"
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessUserPagenation;
