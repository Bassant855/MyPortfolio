import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Navbar1 from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import './assets/pro1.jpeg'
function App() {

  return (
    <BrowserRouter>
      <Navbar1/>
      <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
