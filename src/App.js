import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
