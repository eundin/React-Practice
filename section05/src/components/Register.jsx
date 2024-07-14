import { useRef, useState } from "react";

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  console.log(input);

  const countRef = useRef(0);
  const inputRef = useRef(0);

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          placeholder="이름"
          onChange={onChange}
        />
      </div>
      <div>
        <input
          name="birth"
          type="date"
          onChange={onChange}
          value={input.birth}
        />
      </div>
      <div>
        <select name="country" onChange={onChange} value={input.country}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          placeholder="자기소개"
          onChange={onChange}
          value={input.bio}
        />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
