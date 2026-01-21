import { React, useState } from "react";

export default function ToDo() {
  const [data, setData] = useState("");   // data store current 
  const [todo, setTodo] = useState([]);  // show all todo 

  const addtodo = () => {                     
    setTodo([...todo, data]);      //  copies all todos ,  data : add new todo
    setData("");                 // cllear in after add 
  };
  const deletetodo = (itemlist) => {  // delete todo using filter 
    const updateTodo = todo.filter((item) => item !== itemlist);
    setTodo(updateTodo);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />

      <button disabled={!data} onClick={addtodo}>
        AddToDO
      </button>
      <ul>
        {todo.map((itemlist) => {
          return (
            <li>
              {itemlist} <button onClick={() => deletetodo(itemlist)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// create input
// clickadd inti list
//show list with delete button
// onclick delete list
