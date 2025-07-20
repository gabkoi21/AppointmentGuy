import React from "react";

const DataTable = ({ columns, data, renderRow }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data &&
            data.map((item, index) =>
              renderRow ? (
                renderRow(item, index)
              ) : (
                <tr key={index}>
                  {columns.map((column, colIndex) => (
                    <td
                      key={`${index}-${colIndex}`}
                      className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                    >
                      {column.accessor
                        ? item[column.accessor]
                        : column.cell?.(item)}
                    </td>
                  ))}
                </tr>
              ),
            )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
