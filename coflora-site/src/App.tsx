import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certificate" element={<Certificate />} />
            </Routes>
        </Router>
    );
}

export default App;
