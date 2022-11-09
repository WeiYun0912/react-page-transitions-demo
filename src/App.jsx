import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

// peer react@"^18.0.0" from framer-motion@7.6.5
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedRoutes />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
