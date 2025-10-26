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
import EditRow from "./EditRow";

const Table = () => {
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

  const handleEdit = (e, rows) => {
    e.preventDefault();
    setEditRowId(rows.id);

    const formValues = {
      destination: rows.destination,
      dateStart: rows.dateStart,
      dateEnd: rows.dateEnd,
    };
    setEditForm(formValues);
  };

  const [editForm, setEditForm] = useState({
    destination: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleEditForm = (e) => {
    e.preventDefault();

    const nameOfForm = e.target.getAttribute("name");
    const valueOfForm = e.target.value;

    const newFormData = { ...editForm };
    newFormData[nameOfForm] = valueOfForm;

    setEditForm(newFormData);
  };

  const columnDef = useMemo(() => columns, []);
  const data = useMemo(() => rows, [rows]);

  const tableInstance = useReactTable({
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full  rounded-sm">
      <form>
        <table className="w-full">
          <thead className="h-14 max-[450px]:h-10">
            {tableInstance.getHeaderGroups().map((headerGroups) => (
              <tr key={headerGroups.id}>
                {headerGroups.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
                <th className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map((row, index) => (
              <Fragment>
                {editRowId === row.id ? (
                  <EditRow
                    row={row}
                    editForm={editForm}
                    handleEditForm={handleEditForm}
                  />
                ) : (
                  <ReadOnlyRow
                    row={row}
                    index={index}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
