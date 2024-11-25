import PropTypes from "prop-types";

//! Importante la fución que tiene el evento onClick del button se le llama función en línea y es la que se ejecutará una vez sea presionado el botón. Además a esto podemos agregar que la función que se ejecutará por el evento también puede estar fuera y no como una función de línea y esta es la forma mas común de hacerlo.

const handleClick = () => {
  console.log("Hola mundo");
};

export const Button = ({ text = "Hola mundo" }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// ! con las propstypes también podemos designar si una props es requerida 100% o sea que no sea nula o si puede ser nula, para decir que es requerida solo hacemos lo siguiente PropTypes.tipoDato.isRequired

Button.prototype = {
  text: PropTypes.string.isRequired,
};

// ! De esta manera le podemos asignar por defecto un valor a la props, pero también podemos usar dependiendo de si nos gusta mas la de colocarle directamente el valor en el parámetro.

// Button.defaultProps = {
//   text: "Hola mundo",
// };
