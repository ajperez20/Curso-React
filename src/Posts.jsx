import { VscBug } from "react-icons/vsc";

export const Posts = ({ users } = []) => { 
  return (
    <>
      {users.map((user, index) => {
        return <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      })}
    </>
  );
};

// export const Posts = () => {
//   return (
//     <button
//       onClick={() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//           .then((response) => response.json())
//           .then((data) => console.log(data))
//           .catch((error) => console.error(error));
//       }}
//     >
//       <VscBug/>Traer Datos
//     </button>
//   );
// };
