import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import About from "./pages/About";
import Contact from "./pages/Contact";
=======
import SamplesPage from "./pages/Samples";
import Header from "./components/Header";
import Certificate from "./components/Certificate";
>>>>>>> 1777beb8a4c964651547cecf9467e776a8c163c9

function App() {
    return (
        <Router>
<<<<<<< HEAD
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/*" element={<HomePage></HomePage>}></Route>
                <Route path="/samples"></Route>
=======
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/samples" element={<SamplesPage />}></Route>
>>>>>>> 1777beb8a4c964651547cecf9467e776a8c163c9
            </Routes>
        </Router>
    );
}

export default App;
