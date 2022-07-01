import "./App.css";
import Login from "./component/Login";
import Password from "./component/Password";

function App() {
  return (
    <div>
      <Login user="Username" placeholder="Username" />
      <Password user="Password" placeholder="Password" />
    </div>
  );
}

export default App;
