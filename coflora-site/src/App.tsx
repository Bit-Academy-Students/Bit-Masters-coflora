import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
>>>>>>> 6480b3609c6a5177b56e480cd908a47f5d1e23f0

function App() {
    return (
        <Router>
            <Routes>
<<<<<<< HEAD
                <Route path="/*" element={<HomePage></HomePage>}></Route>
                <Route path="/about"></Route>
                <Route path="/contact"></Route>
                <Route path="/samples"></Route>
                <Route path="*" element={<h1>404 Not Found</h1>}></Route>
=======
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact"></Route>
                <Route path="/samples"></Route>
>>>>>>> 6480b3609c6a5177b56e480cd908a47f5d1e23f0
            </Routes>
        </Router>
    );
}

export default App;
