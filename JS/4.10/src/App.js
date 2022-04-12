import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import './App.css';


function ToDo() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => setTodos(todos.concat(data));

  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);
  let inp;

  return (
    <div className="App-input">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Добавить новое дело?
        </label>
        <ul>
          {todos.map(item => (
            <li>{item.text}</li>
          ))}
        </ul>
        <input defaultValue="Новое дело" {...register("text", { required: true, maxLength: 20 })} />

        <input type="submit" />
      </form>
    </div>
  );
}





function App() {

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  let s1 = "↑"
  let s2 = "↓"

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <p>Вы нажали {count} раз</p>
          <button className="App-button" onClick={() => setCount(count + 1)}>
            Нажми на меня
          </button>
        </div>

        <div className='App-age'>
          <div className='App-count'> Возраст {age} </div>
          <div className='App-age-button'>
            <button className="App-up-button" onClick={() => setAge(age + 1)}> {s1} </button>
            <button className="App-up-button" onClick={() => setAge(age - 1)}> {s2} </button>
          </div>
        </div>

        <div>
          <p>{fruit}</p>
          <div>
            <button className="App-button" onClick={() => setFruit('банан')}> {'банан'} </button>
            <button className="App-button" onClick={() => setFruit('огурец')}> {'огурец'} </button>
            <button className="App-button" onClick={() => setFruit('помидов')}> {'помидов'} </button>
            <button className="App-button" onClick={() => setFruit('ананас')}> {'ананас'} </button>
            <button className="App-button" onClick={() => setFruit('яблоко')}> {'яблоко'} </button>
          </div>
        </div>
        <ToDo />



      </header>
    </div>
  );
}

export default App;
