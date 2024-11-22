import "./task.css";

export const TaskCard = ({ ready }) => {
  return (
    <div className="card">
      <h1 className="title">Mi primer tarea</h1>
      <p className={ready ? "textTrue" : "textFalse"}>
        {ready ? "Tarea Realizada" : "Tarea Pendiente"}
      </p>
    </div>
  );
};
