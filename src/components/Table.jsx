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

  const handleEdit = (e, row) => {
    e.preventDefault();
    setEditRowId(row.id);
    // смотрит по индексу, по числу, а у меня заявки по id, по строке
    // ищет по `http://localhost:5000/newtravel/0`
    // а мне надо чтоб так ссылался `http://localhost:5000/newtravel/24a8`
    // при удалении тоже было такое и я исправила, добавив row.origin, а тут так ломается и ничего не просиходит при клике на кнопку редактировать, даже если везде так изменяю
    // setEditRowId(row.origin.id);

    const formValues = {
      destination: row.destination,
      dateStart: row.dateStart,
      dateEnd: row.dateEnd,
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

    const nameOfForm = e.target.name;
    const valueOfForm = e.target.value;

    const newFormData = { ...editForm };
    newFormData[nameOfForm] = valueOfForm;

    setEditForm(newFormData);
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();

    const editedRow = {
      id: editRowId,
      destination: editForm.destination,
      dateStart: editForm.dateStart,
      dateEnd: editForm.dateEnd,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/newtravel/${editRowId}`,
        {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedRow),
        }
      );
      if (!response.ok) throw new Error("Ошибка при редактировании");

      const newRow = [...rows];

      const index = rows.findIndex((row) => row.id === editRowId);

      newRow[index] = editedRow;

      setRows(newRow);
      setEditRowId(null);

    } catch (error) {
      alert("Не удалось отредактировать поездку: " + error.message);
    }
  };

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
    <div className="w-full  rounded-sm">
      <form onSubmit={handleEditFormSubmit}>
        <table className="w-full">
          <thead className="h-14 max-[450px]:h-10">
            <tr>
              <th className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2">
                {t("columns.id")}
              </th>
              <th className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2">
                {t("columns.destination")}
              </th>
              <th className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2">
                {t("columns.dateStart")}
              </th>
              <th className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2">
                {t("columns.dateEnd")}
              </th>
              <th className="text-start pl-2.5 max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:max-w-1/2">
                {t("columns.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map((row, index) => (
              <Fragment key={row.id}>
                {editRowId === row.id ? (
                  <EditRow
                    row={row}
                    editForm={editForm}
                    handleEditForm={handleEditForm}
                    handleCancle={handleCancle}
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
