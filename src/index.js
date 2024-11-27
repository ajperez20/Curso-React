import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./Counter";

/*
 * Esta función devuelve el elemento root del Dom para el manejo del mismo
 * y este contenido pasa a ser almacenado en la constante declarada
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

//* Renderizamos el componente Greeting dentro de una etiqueta html

root.render(
  <>
    <Counter />
  </>
);
