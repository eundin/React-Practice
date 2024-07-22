import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

function TodoItem({ id, isDone, content, date }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input checked={isDone} type="checkbox" onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

// // id, isDone, content, date, onUpdate, onDelete (자신이 받고잇는 props)가 변경되지 않으면 리렌더 안 일어남
// //고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prev, next) => {
//   //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // true: Props 안 바뀜 -> 리렌더 X
//   // false: Props 바뀜 -> 리렌더 O
//   if (prev.id !== next.id) return false;
//   if (prev.isDone !== next.isDone) return false;
//   if (prev.content !== next.content) return false;
//   if (prev.date !== next.date) return false;
//   return true;
// });

export default memo(TodoItem);
