import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailpage from "./pages/ProductDetailPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";

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
                <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
