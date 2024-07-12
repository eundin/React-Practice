import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} placeholder="이름" onChange={onChangeName} />
      </div>
      <div>
        <input type="date" onChange={onChangeBirth} value={birth} />
      </div>
      <div>
        <select onChange={onChangeCountry} value={country}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea placeholder="자기소개" onChange={onChangeBio} value={bio} />
      </div>
    </div>
  );
}
