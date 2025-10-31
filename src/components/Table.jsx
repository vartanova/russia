import {
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import ReadOnlyRow from "./ReadOnlyRow";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({
  modalActive,
  setModalActive,
  data,
  columnDef,
  setRows,
  handleRowId,
}) => {
  const { t } = useTranslation("travelrequestpage");
  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/newtravel/${id}`, {
        method: "delete",
      });
      if (!response.ok) throw new Error("Не удалось удалить поездку");

      setRows((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      toast.error("Возникла проблема с запросом:" + error.message);
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
          {tableInstance.getRowModel().rows.map((row, index) => (
            <ReadOnlyRow
              row={row}
              index={index}
              handleDelete={handleDelete}
              modalActive={modalActive}
              setModalActive={setModalActive}
              handleRowId={handleRowId}
            />
          ))}
        </tbody>
      </table>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  );
};

export default Table;
