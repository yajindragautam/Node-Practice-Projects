import { rejects } from "assert";
import http from "http";
import fetch from "node-fetch"; // Used To fetch APIS in NODE
import { resolve } from "path";

const Promise1 = fetch("https://reqres.in/api/users");
const Promise2 = fetch("https://catfact.ninja/fact");
const Promise3 = fetch("https://www.boredapi.com/api/activity");

// ----- NORMAL PROMISE CHAINING ----------
Promise1.then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Someting went wrong" + err));

Promise2.then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Something went wrong" + err));

Promise3.then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Something went wrong" + err));

// ----- NORMAL PROMISE.ALL() ----------
Promise.all([Promise1, Promise2, Promise3])
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Something went wrong" + err));

// ----- NORMAL PROMISE.RACE()  ----------
Promise.race([Promise1, Promise2, Promise3])
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Something went wrong" + err));

/*
const fetchAPI = () => {
  return new Promise((resolves, reject) => {
    let error = false;
    if (!false) {
      resolves();
      fetch("https://api.github.com/users");
    } else {
      reject(" Something went wrong !");
    }
    // note that the `status` function is actually **called** here, and that it **returns a promise***
  });
};

fetchAPI()
  .then((res) => res.json()) // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
  .then((result) => {
    // ... which is why `data` shows up here as the first parameter to the anonymous function
    console.log("Request succeeded with JSON response", result);
  })
  .catch((error)=> console.log(error)); */
