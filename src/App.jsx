import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"
import Cats from "./pages/Cats";

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cats" element={<Cats/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
