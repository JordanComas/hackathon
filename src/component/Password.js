import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Password = (props) => {
  const [text, setText] = React.useState("");

  return (
    <div>
      <h2>Password</h2>
      <input
        type="password"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder={props.placeholder}
      ></input>
      <p>
        {props.placeholder}
        {text.length < 6 ? " is too short!" : " is perfect, let's eat!"}
      </p>
      <Link to="/about">
        <button type="submit">Enter Page</button>
      </Link>
    </div>
  );
};
export default Password;
