
export function applyDateMask(value) {
  if (!value) return "";

  value = value.replace(/\D/g, "");

  if (value.length > 6) value = value.slice(0, 6);

  let formatted = value;
  if (value.length > 4) {
    formatted = value.replace(/^(\d{2})(\d{2})(\d{1,2})$/, "$1.$2.$3");
  } else if (value.length > 2) {
    formatted = value.replace(/^(\d{2})(\d{1,2})$/, "$1.$2");
  }

  return formatted;
}