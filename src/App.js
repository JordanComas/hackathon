import "./App.css";
import Main from "./component/Main";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import RecipeDetails from "./component/RecipeDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/RecipeDetails/" element={<RecipeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
