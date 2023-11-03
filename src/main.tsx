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
Your task is to add infinite scrolling to the list of pokemons. 
Api calls should be incremental and not reload all the previous loaded pokemons.

ADDITIONAL INFO
1) Add the infinite scrolling funcitonality to the list of pokemons.
3) Add loading and error handling logic. Show a loading indicator while fetching data and an error message if there are issues
5) Add some Jest tests.
*/
