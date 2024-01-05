
import "./App.scss"
import "./Components/styles/Responsive.scss"

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";


import {BrowserRouter as Router } from "react-router-dom"
function App() {

  return (
    <div className="app">
    <Router>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </Router>
    </div>
  )
}

export default App
