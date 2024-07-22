import { createContext, useCallback, useReducer, useRef } from "react";
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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const ToDoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mock);

  const idRef = useRef(3);

  // const onDelete = (targetId) => {
  //   //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열

  //   dispatch({
  //     type: "DELETE",
  //     targetId,
  //   });
  // };

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    //todos State의 값들 중에
    //tartgetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열

    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ToDoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List />
      </ToDoContext.Provider>
    </div>
  );
}

export default App;
