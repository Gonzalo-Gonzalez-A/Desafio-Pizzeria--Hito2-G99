import { Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import Footer from "./components/Footer";
import Login from "./components/Login";
import RegisterPage from "./components/RegisterPage";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <CardPizza /> */}
      <Cart />
      {/* <Login /> */}
      {/* <RegisterPage /> */}
      <Footer />
    </div>
  );
};
export default App;