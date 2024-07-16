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

  const onUpdate = (targetId) => {
    //todos State의 값들 중에
    //tartgetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
