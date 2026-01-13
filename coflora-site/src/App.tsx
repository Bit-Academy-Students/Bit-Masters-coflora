import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
<<<<<<< HEAD
import Contact from "./components/Contact";
=======
import Contact from "./pages/Contact";
import SamplesPage from "./pages/Samples";
>>>>>>> About

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
<<<<<<< HEAD
                <Route path="/samples"></Route>
                <Route path="*" element={<h1>404 Not Found</h1>}></Route>
=======
                <Route path="/*" element={<HomePage></HomePage>}></Route>
                <Route path="/samples" element={<SamplesPage></SamplesPage>}></Route>
>>>>>>> About
            </Routes>
        </Router>
    );
}

export default App;
