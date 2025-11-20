import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NavBar></NavBar>}></Route>
                <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
