import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Samples from "./pages/Samples";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/samples" element={<Samples></Samples>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
