import Todo from "./Todo";
import Todocount from "./Todocount";

const Todolist = ({ todos }) => {
    return (
        <>
            <Todocount />
            
            <ul className="todo-list">
                { todos.map((todo, index) => <Todo 
                                                key={ todo.id } 
                                                index={ index } 
                                                todo={ todo }
                                            />
                            )
                }
            </ul>
        </>
    );
}

export default Todolist;