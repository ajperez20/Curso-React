import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
/*
 * Esta función devuelve el elemento root del Dom para el manejo del mismo
 * y este contenido pasa a ser almacenado en la constante declarada
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

//* Renderizamos el componente Greeting dentro de una etiqueta html
root.render(
  <>
    <TaskCard ready={false} />

    {/* <UserCard
      name="Arturo"
      amount={1234}
      married={true}
      address={{
        city: "Caracas",
        street: "Pueblo Nuevo, frente al liceo",
      }}
    />
    <UserCard
      name="Angel"
      amount={1234}
      married={false}
      address={{
        city: "Apure",
        street: "Madre Vieja",
      }}
    /> */}
    {/* title en este caso es una props que le estamos pasando al componente Greeting, para mandar tipos de datos diferentes a strings, tenemos que guardar el contenido dentro de {}, además de tipos de datos puedo pasar funciones tranquilamente también*/}

    {/* <Button text="click me" />
    <Button text="click you" />
    <Button text="click ay" />
    <Button /> */}
  </>
);
