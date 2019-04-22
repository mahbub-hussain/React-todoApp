import React, { useState } from "react";
export default function TodoApp() {
  const [todo, setTodo] = useState({
    items: [],
    value: ""
  });
  const handleChange = e => {
    setTodo({ ...todo, value: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newitems = {
      id: Date.now(),
      text: todo.value
    };
    if (todo.value !== "") {
      setTodo({ ...todo, items: todo.items.concat(newitems), value: "" });
    }
  };
  const handleRemove = id => {
    setTodo({ ...todo, items: todo.items.filter(item => item.id !== id) });
  };
  return (
    <div className="todoapp">
      <form onSubmit={handleSubmit}>
        <input value={todo.value} onChange={handleChange} type="text" />
        <button>Submit</button>
      </form>
      <ul>
        {todo.items.map(item => (
          <li>
            {item.text}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
