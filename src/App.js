
import logo from './logo.svg';
import './App.css';
import RecipeDetails from './component/RecipeDetails';

function App() {
  return (
    <div className="App">
    <RecipeDetails/>

import "./App.css";
import Main from "./component/Main";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
