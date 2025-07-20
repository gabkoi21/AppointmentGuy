import React from "react";

interface Column {
  key: string;
  label: string;
}

interface DataTableProps<T> {
  columns: Column[];
  data: T[];
  renderRow: (row: T, index: number) => React.ReactNode;
}

const DataTable = <T,>({ columns, data, renderRow }: DataTableProps<T>) => {
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

export default DataTable;
