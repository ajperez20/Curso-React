import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Esta función devuelve el elemento root del Dom para el manejo del mismo
 * y este contenido pasa a ser almacenado en la constante declarada
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
* Defimos el componente greeting(Saludar)
? Importante: podemos definir los componentes tanto como arrow functions como también functions normales, dependerá completamente de cual de las versiones quieras usar.

? Además de esto puedes retornar bloques de html tan complejos como sea necesario para definir tu componente
*/

const Greeting = () => {
  function Add(x, y) {
    return x + y;
  }
  return <h1>{Add(10, 30)}</h1>;
};

//* Renderizamos el componente Greeting dentro de una etiqueta html

//? Forma que usaré
root.render(
  <>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);

//? Otra forma no tan conmún

// root.render(
//     <div>
//         {Greeting()}
//         {Greeting()}
//         {Greeting()}
//         {Greeting()}
//     </div>
// )

//*Renderizamos el componente Greeting de manera directa

// root.render(
//     greeting()
// )
