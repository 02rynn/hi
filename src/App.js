import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value); //todo값을 setTodos에 넣었음
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos]);
  };

  return (
    <div>
      <form action="#" onSubmit={onSubmit}>
        <h1>My Todo</h1>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="whats your todo?"
        />
        <button>입력</button>
      </form>
      <ul>
        {todos.map((i) => {
          return <li>{i}</li>;
        })}
      </ul>
    </div>
  );

  // const [todo, setTodo] = useState("");
  // const onChange = (e) => setTodo(e.target.value);
  // //settodo에 변화가 생기면 그 변화값을 settodo에 저장해서 보여줌
  // const [todos, setTodos] = useState([]);
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (todo === "") {
  //     return; //todo가 빈값이면 그냥 이 함수를 kill 아무것도 return하지 않음
  //   }
  //   setTodo("");
  //   setTodos((currentArray) => [todo, ...currentArray]);
  //   //state에 함수를 보낼 수 있음.
  //   console.log(todos);
  // };

  // return (
  //   <form action="#" onSubmit={onSubmit}>
  //     <div>
  //       <h1>My TODO({todos.length})</h1>
  //       <input
  //         value={todo} //input에 적히는 값=todo
  //         onChange={onChange}
  //         type="text"
  //         placeholder="Write your to do.."
  //       />
  //       <button>입력</button>
  //       <hr />
  //       <ul>
  //         {todos.map((item) => (
  //           <li>{item}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </form>
  // );
}

export default App;
