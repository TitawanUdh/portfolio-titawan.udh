import MainPage from "./pages/Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./pages/Navbar";
import SkillsPage from "./pages/Skills";
import ExperiencePage from "./pages/Experience";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
export default App;
