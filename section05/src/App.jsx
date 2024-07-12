import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLigth] = useState("off");
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLigth(light === "off" ? "on" : "off");
          }}
        >
          {light === "off" ? "켜기" : "끄기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
