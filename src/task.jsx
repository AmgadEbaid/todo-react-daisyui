export default function Task({ task ,todo,settodo}) {

  return (
    <li className="  flex flex-row p-6 justify-between bg-slate-600 rounded"  key={task.id}  >
      {task}
      <input type="checkbox" checked="checked" className="checkbox" onClick={() => removetodo(item.id)}/>
    </li>
  );
}
