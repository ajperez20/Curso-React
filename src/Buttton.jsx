import PropTypes from "prop-types";

export const Button = ({ text }) => {
  return <button>{text}</button>;
};

// ! con las propstypes también podemos designar si una props es requerida 100% o sea que no sea nula o si puede ser nula, para decir que es requerida solo hacemos lo siguiente PropTypes.tipoDato.isRequired

Button.prototype = {
  text: PropTypes.string.isRequired,
};

// ! De esta manera le podemos asignar por defecto un valor a la props, pero también podemos usar dependiendo de si nos gusta mas la de colocarle directamente el valor en el parámetro.

Button.defaultProps = {
  text: "Hola mundo",
};
