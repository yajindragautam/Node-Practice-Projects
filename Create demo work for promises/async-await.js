import fetch from "node-fetch";

let response;
let responseData;
(async () => {
  try {
     response = await fetch("https://reqres.in/api/users");
     responseData = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    console.log(e);
  }
  console.log(responseData);
})();
