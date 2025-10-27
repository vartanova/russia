import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import React, { useMemo, useState, Fragment } from "react";
import db from "../constants/db.json";
import { columns } from "../constants/columns";
import { useTranslation } from "react-i18next";
import ReadOnlyRow from "./ReadOnlyRow";

const Table = ({modalActive, setModalActive}) => {
  const { t } = useTranslation("travelrequestpage");

  const [rows, setRows] = useState(db.newtravel);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/newtravel/${id}`, {
        method: "delete",
      });
      if (!response.ok) throw new Error("Не удалось удалить поездку");

      setRows((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Возникла проблема с запросом:", error);
    }
  };

  const [editRowId, setEditRowId] = useState(null);

  const handleCancle = () => {
    setEditRowId(null);
  };

  const columnDef = useMemo(() => columns, []);
  const data = useMemo(() => rows, [rows]);

  const tableInstance = useReactTable({
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-auto rounded-sm">
      <table className="w-full">
        <thead className="h-14 max-[580px]:h-10">
          <tr>
            <th className="text-start pl-2.5 max-[884px]:text-xs max-[580px]:text-[8px] max-[580px]:max-w-1/2">
              {t("columns.id")}
            </th>
            <th className="text-start pl-2.5 max-[884px]:text-xs max-[580px]:text-[8px] max-[580px]:max-w-1/2">
              {t("columns.destination")}
            </th>
            <th className="text-start pl-2.5 max-[884px]:text-xs max-[580px]:text-[8px] max-[580px]:max-w-1/2">
              {t("columns.dateStart")}
            </th>
            <th className="text-start pl-2.5 max-[884px]:text-xs max-[580px]:text-[8px] max-[580px]:max-w-1/2">
              {t("columns.dateEnd")}
            </th>
            <th className="text-start pl-2.5 max-[884px]:text-xs max-[580px]:text-[8px] max-[580px]:max-w-1/2">
              {t("columns.actions")}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row, index) => (
            <ReadOnlyRow row={row} index={index} handleDelete={handleDelete} modalActive={modalActive} setModalActive={setModalActive} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
