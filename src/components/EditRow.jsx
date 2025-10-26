import React from "react";

const EditRow = ({ row, editForm, handleEditForm, handleCancle }) => {
  return (
    <tr>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        {row.id}
      </td>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        <input
          type="text"
          name="destination"
          placeholder="Enter a destination..."
          value={editForm.destination ?? ""}
          onChange={handleEditForm}
          className="outline-none focus:text-xs "
        />
      </td>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        <input
          type="text"
          name="dateStart"
          placeholder="Enter a date start..."
          value={editForm.dateStart ?? ""}
          onChange={handleEditForm}
          className="outline-none focus:text-xs"
        />
      </td>
      <td className="p-5 border-t max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2">
        <input
          type="text"
          name="dateEnd"
          placeholder="Enter a date end..."
          value={editForm.dateEnd ?? ""}
          onChange={handleEditForm}
          className="outline-none focus:text-xs"
        />
      </td>
      <td className="flex items-center">
        <div className="p-2.5 border-t">
          <button
            type="submit"
            className="cursor-pointer border rounded-4xl px-4.5 py-1 hover:bg-[#4e6813] max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2"
          >
            Save
          </button>
        </div>
        <div className="p-2.5 border-t">
          <button
            type="button"
            onClick={handleCancle}
            className="cursor-pointer border rounded-4xl px-4.5 py-1 hover:bg-[#4e6813] max-[884px]:text-xs max-[450px]:text-[8px] max-[450px]:p-2"
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditRow;
