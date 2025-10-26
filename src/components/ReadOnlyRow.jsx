import { flexRender } from "@tanstack/react-table";
import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import db from "../constants/db.json";

const ReadOnlyRow = ({ row, handleEdit, handleDelete }) => {
  const { t } = useTranslation("travelrequestpage");

  return (
    <tr key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <td
          key={cell.id}
          className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2"
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
      <td className="flex items-center">
        <div className="p-2.5 border-t">
          <button
            onClick={(e) => handleEdit(e, row)}
            className="cursor-pointer border rounded-4xl px-4.5 py-1 hover:bg-[#4e6813] max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2"
          >
            {t("columns.btns.edit")}
          </button>
        </div>
        <div className="p-2.5 border-t">
          <button
            onClick={() => handleDelete(row.original.id)}
            className="cursor-pointer border rounded-4xl px-4.5 py-1 hover:bg-[#4e6813] max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2"
          >
            {t("columns.btns.delete")}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
