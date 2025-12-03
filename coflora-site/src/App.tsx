import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact"></Route>
                <Route path="/samples"></Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
