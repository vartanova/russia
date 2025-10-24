import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import db from "../constants/db.json";
import { columns } from "../constants/columns";

const Table = () => {
  const columnDef = useMemo(() => columns, []);
  const data = useMemo(() => db.newtravel, []);

  const tableInstance = useReactTable({
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full border rounded-4xl">
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroups) => (
          <tr key={headerGroups.id}>
            {headerGroups.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
