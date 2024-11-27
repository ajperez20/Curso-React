import { useState, useEffect } from "react";

//!  useState: te permite crear variables reactivas y cambiar su estado, esta función retorna un arreglo donde la primer posición es la varible reactiva y la segunda posición es la función que te permite setear el estado de la variable, además de esto a la función useState se le asigna un valor inicial que se pasa como parámetro a la función directamente.

//! useEffect: esta función de react te permite escuchar los cambios en ciertas porciones del código con respecto a la interfaz de la aplicación, ejemplo cambios en una de las partes de un componente. UseEffect te permite escuchar tanto los cambios de ciertas partes como las del todo el componente al que está asociado, además de esto puedes también limitar que el useEffect se ejecute una sola vez o sea en el momento en que se renderiza la página, esto lo haces dejando el arreglo [] final de la función vacío. A lo que se le coloca en el arreglo [] se le llama dependencia y es básicamente para decirle al useEffect de qué parte depende para dispararse.

export const Counter = () => {
  //Hooks
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Cambié");
  }, [counter]);

  //EventHandlers
  const hCAumentar = () => {
    setCounter(counter + 1);
  };
  const hCDecrementar = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={hCAumentar}>Aumentar</button>
      <button onClick={hCDecrementar}>Decrementar</button>
    </div>
  );
};
