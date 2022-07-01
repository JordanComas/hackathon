import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./componenet/AboutUs";
import Contact from "./componenet/Contact";

function App() {
  return (
    <div>
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
