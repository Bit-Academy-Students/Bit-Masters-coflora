import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SamplesPage from "./pages/Samples";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/*" element={<HomePage></HomePage>}></Route>
                <Route path="/samples" element={<SamplesPage></SamplesPage>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
