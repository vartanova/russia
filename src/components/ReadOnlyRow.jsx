import { flexRender } from "@tanstack/react-table";
import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import db from "../constants/db.json";

const ReadOnlyRow = ({ row, handleDelete }) => {
  const { t } = useTranslation("travelrequestpage");

  return (
    <tr key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <td
          key={cell.id}
          className="break-all h-10 py-5 px-2.5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2"
        >
          <div className="max-h-12 overflow-auto">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </div>
        </td>
      ))}
      <td className="p-2.5 border-t align-middle">
        <div className="flex items-center gap-2.5 max-[700px]:block">
          <button className="cursor-pointer border rounded-4xl px-4.5 py-1 hover:bg-[#4e6813] max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2 max-[700px]:mb-2.5 max-[580px]:text-[8px] max-[580px]:mb-1.5">
            {t("columns.btns.edit")}
          </button>
          <button
            type="button"
            onClick={() => handleDelete(row.original.id)}
            className="cursor-pointer border rounded-4xl px-4.5 py-1 hover:bg-[#4e6813] max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2 max-[580px]:text-[8px]"
          >
            {t("columns.btns.delete")}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
