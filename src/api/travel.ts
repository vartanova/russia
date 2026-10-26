import { supabase } from "../lib/supabase";

export type TravelRow = {
  id: string;
  destination: string;
  dateStart: string;
  dateEnd: string;
};

export type TravelFormData = Omit<TravelRow, "id">;

type TravelDbRow = {
  id: string;
  destination: string;
  date_start: string;
  date_end: string;
};

const TABLE_NAME = "newTravel";

const mapTravelRow = (row: TravelDbRow): TravelRow => ({
  id: row.id,
  destination: row.destination,
  dateStart: row.date_start,
  dateEnd: row.date_end,
});

export const createTravelRequest = async ({
  destination,
  dateStart,
  dateEnd,
}: TravelFormData): Promise<void> => {
  const { error } = await supabase.from(TABLE_NAME).insert({
    destination,
    date_start: dateStart,
    date_end: dateEnd,
  });

  if (error) throw error;
};

export const getTravelRequests = async (): Promise<TravelRow[]> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("id, destination, date_start, date_end")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (data ?? []).map(mapTravelRow);
};

export const updateTravelRequest = async (
  id: string,
  { destination, dateStart, dateEnd }: TravelFormData,
): Promise<TravelRow> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update({
      destination,
      date_start: dateStart,
      date_end: dateEnd,
    })
    .eq("id", id)
    .select("id, destination, date_start, date_end")
    .single();

  if (error) throw error;

  return mapTravelRow(data);
};

export const deleteTravelRequest = async (
  id: string,
): Promise<void> => {
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", id)
    .select("id")
    .single();

  if (error) throw error;
};
