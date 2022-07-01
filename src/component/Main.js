import React from "react";
import Login from "./Login";
import Password from "./Password";

const Main = () => {
  return (
    <div className="login">
      <Login />
      <Password placeholder="Password" />
    </div>
  );
};

export default Main;
