import { useEffect, useState } from "react";

export default function Addtasks({ todo, settodo }) {
  const [task, settask] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  function addtodo() {
    if (task !== "") {
      settodo([
        ...todo,
        {
          id: crypto.randomUUID(),
          title: task,
        },
      ]);
      settask("");
    }
  }

  function handeltaskchange(event) {
    settask(event.target.value);
  }
  return (
    <div className=" flex flex-row py-9 gap-5">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered  w-full max-w-xs"
        value={task}
        onChange={handeltaskchange}
        onClick={null}
      />
      <button className="btn btn-primary" onClick={() => addtodo(task)}>
        add
      </button>
    </div>
  );
}
