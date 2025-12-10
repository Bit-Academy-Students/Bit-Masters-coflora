import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SamplesPage from "./pages/Samples";
import Header from "./components/Header";
import Certificate from "./components/Certificate";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/samples" element={<SamplesPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
