import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import db from "../constants/db.json";
import { columns } from "../constants/columns";
import { useTranslation } from "react-i18next";

const Table = () => {
  const { t } = useTranslation("travelrequestpage");  
  
  const columnDef = useMemo(() => columns, []);
  const data = useMemo(() => db.newtravel, []);

  const tableInstance = useReactTable({
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full  rounded-sm">
      <table className="w-full">
        <thead className="h-14 max-[450px]:h-10">
          {tableInstance.getHeaderGroups().map((headerGroups) => (
            <tr key={headerGroups.id}>
              {headerGroups.headers.map((header) => (
                <th key={header.id} className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2">
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
            <tr key={row.id} className="hover:bg-[#4e6813] hover:cursor-pointer">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2.5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
