import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SamplesPage from "./pages/Samples";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<HomePage></HomePage>}></Route>
                <Route path="/about"></Route>
                <Route path="/contact"></Route>
                <Route path="/samples" element={<SamplesPage></SamplesPage>}></Route>
                <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
