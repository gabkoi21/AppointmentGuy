import React from "react";

const DataTable = ({ columns, data, renderRow }: DataTableProps<T>) => {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 dark) => (
              <th key={col.key} className="px-4 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark, idx) => renderRow(item, idx))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
