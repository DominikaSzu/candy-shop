import React from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import CandyBasket from "./CandyBasket";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
		<Logo />
		<CandyBasket />
		<Footer />
      </div>
    );
  }
}

export default Cart;