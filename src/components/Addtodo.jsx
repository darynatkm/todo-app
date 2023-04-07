import { useRef } from "react";


const Addtodo = ({ addTodo }) => {
  const inputEl = useRef(null);

  return (
    <div className="add-todo">
      <input ref={ inputEl } className="add-todo-input" type="text"/>
      <button onClick={ () => { addTodo(inputEl.current.value) } } className="add-todo-btn">Add</button>
    </div>
  );
};

export default Addtodo;