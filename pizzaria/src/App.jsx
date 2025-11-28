import { Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import CardPizza from "./components/CardPizza";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Pizza from "./components/Pages/Pizzas";
import CartPage from "./components/Pages/CartPage";
import LoginPage from "./components/Pages/LoginPage";
import Register from "./components/Pages/Register";
import HomePage from "./components/Pages/HomePage";
import Main from "./components/Main";
import Profile from "./components/Pages/Profile";
import CartProvider from "./context/CardContext";
import './App.css';


const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pizzas" element={<Pizza />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pizzas/:id" element={<CardPizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Main>
      </CartProvider>
      <Footer />
    </div>
  );
};
export default App;