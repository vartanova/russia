import process from "node:process";
import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";
import { loadEnv } from "vite";

const env = { ...loadEnv("development", process.cwd(), ["VITE_SUPABASE_", "SUPABASE_ADMIN_"]), ...process.env };
const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_PUBLISHABLE_KEY;
const email = env.SUPABASE_ADMIN_EMAIL;
const password = env.SUPABASE_ADMIN_PASSWORD;

if (!url || !key || !email || !password) {
  console.error("Ошибка: задайте VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY, SUPABASE_ADMIN_EMAIL и SUPABASE_ADMIN_PASSWORD в .env.");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
const testRow = {
  destination: `Проверка БД ${randomUUID()}`,
  date_start: "01.01.26",
  date_end: "02.01.26",
};
let inserted = false;
let authenticated = false;

try {
  console.log("Создание тестовой заявки от имени гостя...");
  const { error: insertError } = await supabase.from("newTravel").insert(testRow);
  if (insertError) throw insertError;
  inserted = true;
  console.log(`Заявка создана: ${testRow.destination}`);

  console.log("Авторизация администратора...");
  const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
  if (authError) throw authError;
  authenticated = true;
  console.log("Авторизация выполнена.");

  const { data: row, error: readError } = await supabase
    .from("newTravel")
    .select("id, destination, date_start, date_end")
    .eq("destination", testRow.destination)
    .single();
  if (readError) throw readError;
  if (Object.keys(testRow).some((field) => row[field] !== testRow[field])) {
    throw new Error("Прочитанные данные не совпадают с записанными");
  }
  console.log("Чтение успешно:", row);
  console.log("Проверка записи и чтения пройдена.");
} catch (error) {
  console.error("Ошибка проверки БД:", error.message);
  process.exitCode = 1;
} finally {
  if (inserted && authenticated) {
    const { data, error } = await supabase.from("newTravel").delete()
      .eq("destination", testRow.destination).select("id").single();
    if (error || !data) {
      console.error(`Не удалось удалить тестовую заявку «${testRow.destination}»: ${error?.message ?? "запись не найдена"}`);
      process.exitCode = 1;
    } else {
      console.log("Тестовая заявка удалена.");
    }
  } else if (inserted) {
    console.error(`Удалите тестовую заявку вручную: «${testRow.destination}».`);
  }
}
