import "./App.css";
import Addtasks from "./addTasks";
import Tasklist from "./tasks";
import { useEffect, useState } from "react";

function App() {
  const [todo, settodo] = useState(() => {
    const localtodo = localStorage.getItem("todo");
    if (localtodo == null) return [];
    return JSON.parse(localStorage.getItem("todo"));
  });

  return (
    <div className="grid place-items-center	">
      <div className="w-6/12 ">
        <Addtasks todo={todo} settodo={settodo} />
        <Tasklist todo={todo} settodo={settodo} />
      </div>
    </div>
  );
}

export default App;
