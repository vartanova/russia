export type columnsItem = {
  header: string
  accessorKey: string
};

export const columns: columnsItem[]  = [
  {
    header: "ID Запроса",
    accessorKey: "id",
  },
  {
    header: "Место прибытия",
    accessorKey: "destination",
  },
  {
    header: "Дата начала",
    accessorKey: "dateStart",
  },
  {
    header: "Дата окончания",
    accessorKey: "dateEnd",
  },
];
