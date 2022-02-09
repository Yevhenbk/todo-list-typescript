import React from 'react';
import AddTodoComponent from './AddTodoComponent';
import TodosComponent from './TodosComponent';

type ITodo = {
  id: number,
  title: string,
  completed: boolean
}

type ITodos = {
  todos: ITodo[]
}

function App() {
  const [todos, setTodos] = React.useState<ITodos>({todos: []});
  const addTodos = (title: string) => { 
    setTodos({
      todos: [
        {title, completed: false, id: todos.todos.length+1}, 
        ...todos.todos
      ]
    });
  };
  const deleteTodos = (id: number) => {
    setTodos({
      todos: todos.todos.filter(t => t.id !== id)
    });
  };
  const toggleTodos = (id: number) => {
    setTodos({
      todos: todos.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    });
  }

  return (
    <div className="App">
      <h3>Todo List</h3>
      <AddTodoComponent addTodos={addTodos} />
      <TodosComponent 
        todos={todos} 
        toggleTodos={toggleTodos}
        deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;
