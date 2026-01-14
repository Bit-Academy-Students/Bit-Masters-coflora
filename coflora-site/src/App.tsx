import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailpage from "./pages/ProductDetailPage";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route
                    path="/products/:productId"
                    element={<ProductDetailpage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
