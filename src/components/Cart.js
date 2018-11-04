import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CandyBasket from "./CandyBasket";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
		    <Logo />
		    <Navbar />
		    <CandyBasket />
		    <Footer />
      </div>
    );
  }
}

export default Cart;