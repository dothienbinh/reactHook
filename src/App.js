import logo from './logo.svg';
import './App.css';
import Nav from './Views/Nav';
import { useState, useEffect } from 'react';
import Todo from './Views/Todo'


//template + logic

function App() {
  let [name, setName] = useState('Binh');
  const [address, setAddress] = useState(``);
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'watching video' },
    { id: 'todo2', title: 'play game' },
  ]);

  useEffect(() => {
    console.log('hey hey hey !')
  })

  const handleEventOnClick = (event) => {
    if (!address) {
      alert('Missing!!');
      return;
    }
    let id = Math.floor(Math.random() * 10000);
    let Newtodo = { id: id, title: address };
    setTodos([...todos, Newtodo]);
    setAddress('');

  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id);
    setTodos(currentTodos);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello world {name}</h2>
        <Todo
          todos={todos}
          deleteDataTodo={deleteDataTodo}
        />
        <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={() => handleEventOnClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
