import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./pages/about/About";
import { Participants } from "./pages/participants/Participants";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";
import { Datasets } from "./pages/datasets/Datasets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/datasets" element={<Datasets />} />
      </Routes>
    </Router>
  );
}

export default App;
