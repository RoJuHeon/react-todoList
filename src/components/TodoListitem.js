// Code convention
import React, { useState } from "react";

export default function TodoList(props) {
  const { title } = props;

  const [done, setDone] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "10vh",
        backgroundColor: "lightblue",
      }}
    >
      <div>
        <input
          type={"checkbox"}
          onChange={(event) => {
            setDone(event.target.checked);
            console.log(event.target.checked);
          }}
          checked={done}
        ></input>

        <label
          style={{
            textDecoration: done ? "line-through" : "none",
            color: done ? "purple" : "white",
          }}
        >
          {title}
        </label>
      </div>
    </div>
  );
}
