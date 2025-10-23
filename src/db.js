const form = document.getElementById("form");
// const travelId = document.getElementById("travelId");

// отправка данных на сервер (db.json)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTravel = new newTravel(form);
  const newTravelObject = Object.fromEntries(newTravel);

  fetch(`http://localhost:3000/newtravel`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...newTravelObject,
    }),
  })
    .then((response) => {
      console.log("response:", response);
      return response.json();
    })
    .then((json) => {
      console.log("json:", json);
    });
});

// здесь загрузка данных (и через /${} добавить id поездки)
// fetch(`http://localhost:3000/newtravel`)
//   .then((response) => {
//     console.log("response:", response);
//     return response.json();
//   })
//   .then((json) => {
//     console.log("json:", json);
//     return response.json();
//   });
