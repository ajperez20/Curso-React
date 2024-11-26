import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

/*
 * Esta función devuelve el elemento root del Dom para el manejo del mismo
 * y este contenido pasa a ser almacenado en la constante declarada
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

//* Renderizamos el componente Greeting dentro de una etiqueta html

const users = [
  {
    id: 1,
    name: 'Arturo',
    image: 'https://robohash.org/user1' 
  },
  {
    id: 2,
    name: 'Angel',
    image: 'https://robohash.org/user2' 
  }
]
root.render(
  <>
    <Posts users = {users}/>
  </>
);
