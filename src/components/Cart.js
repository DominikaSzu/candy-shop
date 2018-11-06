import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CandyBasket from "./CandyBasket";

class Cart extends React.Component {
  
    navigateToHome = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  }

  navigateToCompanyInfo = (e) => {
    e.preventDefault();
    this.props.history.push("/about-us");
  }

  navigateToCart = (e) => {
    e.preventDefault();
    this.props.history.push("/cart");
  }


  render() {
    return (
      <div className="cart">
		    <Logo />
		    <Navbar navigateToHome={this.navigateToHome} 
                navigateToCompanyInfo={this.navigateToCompanyInfo}
                navigateToCart={this.navigateToCart}/>
		    <CandyBasket />
		    <Footer />
      </div>
    );
  }
}

export default Cart;