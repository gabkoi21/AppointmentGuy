import React from "react";
import PropTypes from "prop-types";

const DataTable = ({ columns, data, renderRow }) => {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full border-collapse text-left text-sm text-gray-700 dark:text-gray-300">
        <thead className="bg-gray-100 text-xs uppercase dark:bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          {data.map((item, idx) => renderRow(item, idx))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.array.isRequired,
  renderRow: PropTypes.func.isRequired,
};

export default DataTable;
