import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
const mock = [
  {
    isDone: false,
    content: "react 공부하기",
    id: 0,
    date: new Date().getTime(),
  },
  {
    isDone: false,
    content: "wynn",
    id: 1,
    date: new Date().getTime(),
  },
  {
    isDone: false,
    content: "din",
    id: 2,
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mock);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
