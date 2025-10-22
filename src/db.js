const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`http://localhost:3000/newtravel/`, {
    method: "post",
    body: JSON.stringify({}),
  })
    .then((response) => {
      console.log("response:", response);
      return response.json();
    })
    .then((json) => {
      console.log("json:", json);
      return response.json();
    });
});

// fetch(`http://localhost:3000/newtravel/`)
//   .then((response) => {
//     console.log("response:", response);
//     return response.json();
//   })
//   .then((json) => {console.log(json)
//     const {destination, dateStart, dateEnd} = json

//     resultElement
//   });
