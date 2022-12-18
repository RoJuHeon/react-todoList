import React, { useState } from "react";

export default function CreateTodoItem(props) {
  const { setTodos } = props;
  const [text, setText] = useState("");

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "25vh",
        backgroundColor: "#999",
        // justifyContent: "center", //가로가운데정렬
        alignItems: "center", //세로가운데정렬
      }}
    >
      <div
        style={{ width: 20, height: "100%" }}
        onClick={() => {
          //Todos 추가한다.
          setText("");
          setTodos((prevTodos) => {
            const willReturn = [...prevTodos].concat({
              title: text,
              done: false,
            });
            return willReturn;
          });
        }}
      />
      <input
        type="text"
        style={{ width: 300, height: 100 }}
        onChange={(event) => {
          console.log(event.target.value);
          setText(event.target.value);
        }}
        value={text}
      />
    </div>
  );
}
