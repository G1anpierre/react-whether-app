const KEY = "372a4e77f5d85d4293f9fb85fc0d38eb";
const PREFIX = "/api";

export default function postData(data = "") {
  console.log("data passed: ", data);
  return window
    .fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((response) => response.json())
    .then((data) => console.log("dataaaa: ", data));
}

// function fetchWithData(url = "", data = {}, method = "POST") {
//   console.log("post with Data: ", { url, data, method });
//   // Default options are marked with *
//   return fetch(url, {
//     method,
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   })
//     .then(handleErrors)
//     .then((response) => response.json());
// }

// function handleErrors(response: any) {
//   if (!response.ok) {
//     return response.json().then((body: any) => {
//       throw new Error(body.message);
//     });
//   } else {
//     return response;
//   }
// }
