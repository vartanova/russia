
import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import ReadOnlyRow from "./ReadOnlyRow";
import { deleteTravelRequest } from "../api/travel";
import type { TravelRow } from "../api/travel";

type TableProps = {
  data: TravelRow[];
  columnDef: ColumnDef<TravelRow>[];
  setRows: React.Dispatch<React.SetStateAction<TravelRow[]>>;
  handleRowId: (row: TravelRow) => void;
};

const Table = ({
  data,
  columnDef,
  setRows,
  handleRowId,
}: TableProps) => {
  const { t } = useTranslation("travelrequestpage");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (deletingId) return;

    setDeletingId(id);

    try {
      await deleteTravelRequest(id);

      setRows((prev) => prev.filter((row) => row.id !== id));
      toast.success("Поездка удалена!");
    } catch (error) {
      console.error("Ошибка удаления поездки:", error);
      toast.error("Не удалось удалить поездку");
    } finally {
      setDeletingId(null);
    }
  };

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
          {tableInstance.getRowModel().rows.map((row) => (
            <ReadOnlyRow
              key={row.original.id}
              row={row}
              handleDelete={handleDelete}
              handleRowId={handleRowId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
