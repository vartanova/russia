import React from "react";

const EditRow = ({ row, editForm, handleEditForm }) => {
  return (
    <tr>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        {row.id}
      </td>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        <input
          type="text"
          name="Destination"
          placeholder="Enter a destination..."
          value={editForm.destination}
          onChange={handleEditForm}
        />
      </td>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        <input
          type="text"
          name="dateStart"
          placeholder="Enter a date start..."
          value={editForm.dateStart}
          onChange={handleEditForm}
        />
      </td>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        <input
          type="text"
          name="dateEnd"
          placeholder="Enter a date end..."
          value={editForm.dateEnd}
          onChange={handleEditForm}
        />
      </td>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        <button
          className="cursor-pointer border rounded-4xl px-4.5 py-1 hover:bg-[#4e6813] max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2"
          type="submit"
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
