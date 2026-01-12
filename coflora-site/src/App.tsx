import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
// import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/*" element={<HomePage></HomePage>}></Route>
                <Route path="/about"></Route>
                {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
                <Route path="/samples"></Route>
                <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
