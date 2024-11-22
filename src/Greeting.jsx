/*
* Defimos el componente greeting(Saludar)
? Importante: podemos definir los componentes tanto como arrow functions como también functions normales, dependerá completamente de cual de las versiones quieras usar.

? Además de esto puedes retornar bloques de html tan complejos como sea necesario para definir tu componente
*/

/*
!importante: si exportamos los módulos de esta manera hay entonces que desestructurar el import
 */

/*
! Para recibir props podemos recibir el objeto total con el parámetro props o por otro lado también podemos hacer un destructurin porque al final es un objeto lo que se está recibiendo, si queremos darle un valor por defecto al props simplemente se lo asignamos al parámetro directamente
*/

export const UserCard = ({ name, amount, married, address }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>🤑{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
};
