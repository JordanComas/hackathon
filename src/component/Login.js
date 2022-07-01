import React from "react";
import { useState } from "react";

const Login = (props) => {
  const [text, setText] = React.useState("");

  return (
    <div>
      <h2>Username</h2>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder={props.placeholder}
      ></input>
      <p>
        {props.placeholder}
        {!text.length ? " Missing " : ""}
      </p>
    </div>
  );
};
export default Login;
