import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./components/LandingPage";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { WaveShape } from "./components/WaveShape";
import { Userprofile } from "./components/Userprofile";
import { useAuth } from "./firebase";
import { Items } from "./components/Items";
import { Item } from "./components/Item";
import { Checkout } from "./components/Checkout";
import "./App.css";

function App() {
  const currentUserFirebase = useAuth();

  const currentUser = currentUserFirebase?.email;

  const [cart, setCart] = React.useState({
    cartProduct: [],
    totalQuantity: 0,
    totalPrice: 0,
  });

  React.useEffect(() => {
    setCart((prev) => {
      return {
        ...prev,
        totalQuantity: prev.cartProduct.reduce((total, item) => {
          return (total += item.quantity);
        }, 0),
        totalPrice: prev.cartProduct.reduce((total, item) => {
          return total + item.itemprice * item.quantity;
        }, 0),
      };
    });
  }, [cart.cartProduct]);

  return (
    <Router>
      <div className="content-page">
        <NavBar />
        <div className="option-icon">
          {currentUser === undefined ? (
            ""
          ) : (
            <div className="cart-container">
              <Link to="/checkout">
                <img id="checkout-btn" src="./icons/bagWhite.svg" />
                <span
                  id="cartTotalQuantity"
                  style={
                    cart.totalQuantity !== 0
                      ? { color: "black" }
                      : { color: "white" }
                  }
                >
                  {cart.totalQuantity}
                </span>
              </Link>
            </div>
          )}

          <Link to={currentUser === undefined ? "/login" : "/userprofile"}>
            <img id="user-profile" src="./icons/user.svg" alt="" />
          </Link>
        </div>

        <Routes>
          <Route element={<LandingPage />} path="/" exact />
          <Route element={<Items />} path="/items" exact />
          <Route element={<Item setCart={setCart} />} path="/item" />
          <Route
            element={<Checkout setCart={setCart} cart={cart} />}
            path="/checkout"
          />
          <Route element={<Userprofile />} path="/userprofile" />
          <Route element={<LogIn />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
        </Routes>
      </div>
      <WaveShape />
    </Router>
  );
}
export default App;
