import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// to load more than one pokemon use search params limit=10000 offset=0

/* ASSIGNEMNT
Your task is to create a simple page that displays a list of pokemons along with their names and sprites.
You also need to write some unit tests to ensure the functionality of task

 

ADDITIONAL INFO
1) To fetch pokemons list you can use the APIEndpoint and use the different types included in the types.ts file
2) Add some basic styling using styled-components or emotion.
3) Add loading and error handling logic. Show a loading indicator while fetching data and an error message if there are issues
4) Write a function to sort the Pokemon by name and capitalize the first letter.
5) Add some Jest tests.
*/
