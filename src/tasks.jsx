import { useEffect } from "react";
import Task from "./task";
//<input type="checkbox" checked="checked" className="checkbox"onClick={() => removetodo(ts.id)}/>

export default function Tasklist({ todo, settodo }) {
  useEffect(() => {
    console.log("dsf");
  }, []);

  function removetodo(id) {
    const updatedTodo = todo.filter((item) => item.id !== id);
    settodo(updatedTodo);
  }
  const list = todo.map((ts) => (
    <li
      key={ts.id}
      className="  flex flex-row p-1 justify-between   rounded-lg my-2 	"
    >
      {ts.title}
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md"
        onClick={() => removetodo(ts.id)}
      >
        Remove
      </button>
    </li>
  ));

  return (
    <>
      <ul>{list}</ul>
    </>
  );
}
