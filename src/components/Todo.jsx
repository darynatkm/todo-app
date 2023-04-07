import { useContext, useState } from "react";
import Context from "../Context";

const Todo = ({ todo, index }) => {
    const { setDone, removeTodo, setUpdate} = useContext(Context);
    const [editing, setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true);
    };

    const  cancelEdit = () => {
        setEditing(false);
    }

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
      };
    
     


    return (
        <>
            <li className={ todo.completed ? `todo-item todo-item-done` : `todo-item` }>
                <input 
                    className="todo-item-inner" 
                    type="checkbox" 
                    checked={ todo.completed }
                    onChange={() => {setDone(todo.id)}}
                />
                <span className="todo-item-inner">{ index + 1 }</span>
                <span className="todo-item-inner">{ todo.title }</span>
                <div className="todo-item-actions">
                    <button 
                        className="btn btn-edit" 
                        onClick={handleEditing}>
                        <i className="fa-solid fa-square-pen"></i></button>
                    <button 
                        className="btn btn-del" 
                        onClick={() => removeTodo(todo.id)}>
                        <i className="fa-solid fa-trash-can">
                        </i>
                    </button>
                </div>
            </li>
            <div className={`todo-edit ${editing ? "viewMode" : "editMode"}`}>
                <input
                    type="text"
                    value={todo.title}
                    className="textInput"
                    onChange={(e) => setUpdate(e.target.value, todo.id)}
                    onKeyDown={handleUpdatedDone}
                />
                <button onClick={ () => { cancelEdit()} } className="edit-todo-btn">Cancel</button>

            </div>
        </>
    )
}

export default Todo;