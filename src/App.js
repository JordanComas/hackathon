import "./App.css";

import Login from "./component/Login";
import Password from "./component/Password";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./componenet/AboutUs";
import Contact from "./componenet/Contact";


function App() {
  return (
    <div>

      <Login user="Username" placeholder="Username" />
      <Password user="Password" placeholder="Password" />

      <header>
        <h1>Hackathon Restaraunt</h1>
        <nav className="navbar">
          <Link to="/">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
