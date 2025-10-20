export function applyDateMask(inputElement) {
  if (!inputElement) return;

  inputElement.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 8) value = value.slice(0, 8);

    let formatted = value;
    if (value.length > 4) {
      formatted = value.replace(/^(\d{2})(\d{2})(\d{1,4})$/, "$1.$2.$3");
    } else if (value.length > 2) {
      formatted = value.replace(/^(\d{2})(\d{1,2})$/, "$1.$2");
    }

    e.target.value = formatted;
  });
}
