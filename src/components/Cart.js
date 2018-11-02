import React from "react";
import Logo from "./Logo";
import Footer from "./Footer";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
		<Logo />
		<Footer />
      </div>
    );
  }
}

export default Cart;