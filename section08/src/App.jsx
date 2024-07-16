import { useRef, useState } from "react";
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
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
