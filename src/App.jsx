import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/pages/home/index.jsx";
import Products from "@/pages/products/index.jsx";
import ProductDetail from "@/pages/product-details/index.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
