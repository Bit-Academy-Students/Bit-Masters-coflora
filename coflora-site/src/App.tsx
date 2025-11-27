import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<HomePage></HomePage>}></Route>
                <Route path="/about"></Route>
                <Route path="/contact"></Route>
                <Route path="/samples"></Route>
            </Routes>
        </Router>
    );
}

export default App;
