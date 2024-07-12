import { useState } from "react";

const Bulb = () => {
  const [light, setLigth] = useState("off");
  return (
    <div>
      {light === "on" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLigth(light === "off" ? "on" : "off");
        }}
      >
        {light === "off" ? "켜기" : "끄기"}
      </button>
    </div>
  );
};

export default Bulb;
