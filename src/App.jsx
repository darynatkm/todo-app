import { useState, useEffect } from 'react';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import Filters from './components/Filters';
import Context from './Context';
import SearchBar from './components/Search';



function App() {
  //manage sorting 
  const todosSort = (arr) => {
    return arr.sort((b, a) => {
      if (a.completed) {
        return -1;
      }
      return 1;

    })

  }
  const [todos, setTodos] = useState([]);




  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => (setTodos(todosSort(json))))
  }, []);


  const removeTodo = (id) => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };


  const filterSearch = (val) => {
   

    const newArr = [...todos].filter(todo => todo.title.includes(val));
    setTodos(newArr)
  };

  const showAll = () => {

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(json => (setTodos(todosSort(json))))
  }

  const showDone = () => {

    const newArr = [...todos].filter(todo => todo.completed === true);
    setTodos(newArr)
  }

  const setDone = (id) => {
    const newTodos = todos
                      .map(todo => ( todo.id === id
                                              ? {...todo, completed: !todo.completed}
                                              : todo
                                    )
                          );
    setTodos(todosSort(newTodos));
  }

  const newId = ()  => {
    return todos[todos.length - 1].id + 1;
  }

  const addTodo = (title) => {
    setTodos([...todos, {id: newId(), title, completed: false}]);
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };


  const context = {
    removeTodo,
    setDone, 
    filterSearch,
    showDone,
    showAll,
    setUpdate,
    todoCount: todos.length,
  };

  return (
    <Context.Provider value={ context }>
      <div className="container">
        <h1>Todo App</h1>
        <Addtodo addTodo={addTodo}/>
        <SearchBar  filterSearch={filterSearch}></SearchBar>
        <Filters></Filters>
        <Todolist todos={ todos } setDone={ setDone } removeTodo = { removeTodo }/>
      </div>
    </Context.Provider>
  );
}

export default App;
