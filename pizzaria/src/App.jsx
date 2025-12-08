import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import './App.css';

// Vistas / Páginas
import HomePage from "./components/Pages/HomePage";
import CartPage from "./components/Pages/CartPage";
import LoginPage from "./components/Pages/LoginPage";
import Register from "./components/Pages/Register";
import Profile from "./components/Pages/Profile";
import PizzaDetail from "./components/Pages/PizzaDetail"; // 🎯 Asumo que esta es la vista de detalle
import PizzaList from "./components/Pages/Pizzas"; // 🎯 Asumo que esta es la lista de pizzas

// Contextos
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext"; // 🎯 Requerimiento 2: Importar el UserProvider

// 🎯 Requerimiento 5: Componentes para Rutas Protegidas (debes crearlos en /components)
import { ProtectedRoute, PublicOnlyRoute } from "./components/ProtectedRoute";


const App = () => {
  return (
    <div>
      {/* 🎯 Requerimiento 2: Envolver toda la aplicación con el UserProvider */}
      <UserProvider> 
        <CartProvider>
          <Navbar />
          <Main>
            <Routes>
              {/* === RUTAS SIEMPRE ACCESIBLES === */}
              <Route path="/" element={<HomePage />} />
              <Route path="/pizzas" element={<PizzaList />} /> {/* Lista de Pizzas */}
              <Route path="/cart" element={<CartPage />} />
              
              {/* 🎯 Requerimiento 1: Ruta dinámica para el detalle de la pizza */}
              <Route path="/pizza/:id" element={<PizzaDetail />} />
              
              {/* === RUTAS DE AUTENTICACIÓN (REQUERIMIENTO 5) === */}
              {/* Estas rutas SÓLO deben ser accesibles si el token es FALSE.
                  Si el token es TRUE, redirige a /home. */}
              <Route element={<PublicOnlyRoute redirectTo="/" />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
              </Route>

              {/* === RUTAS PROTEGIDAS (REQUERIMIENTO 5) === */}
              {/* Esta ruta SÓLO debe ser accesible si el token es TRUE.
                  Si el token es FALSE, redirige a /login. */}
              <Route element={<ProtectedRoute redirectTo="/login" />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

              {/* === RUTA 404 === */}
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
          </Main>
        </CartProvider>
      </UserProvider>
      <Footer />
    </div>
  );
};

export default App;