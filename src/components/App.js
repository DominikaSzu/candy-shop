import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import candies from "../candies";


class App extends React.Component {

  state = {
    candies,
    cart: {}
  }
  
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

  addToCart = (element) => {
    const cart = {...this.state.cart};
    cart[element] = cart[element] +1 || 1;
    this.setState({ cart });
  }

  render() {
    
    return (
      <div className="wrapper">
      	<Logo />
      	<Navbar navigateToHome={this.navigateToHome} 
                navigateToCompanyInfo={this.navigateToCompanyInfo}
                navigateToCart={this.navigateToCart}
        />
      	<Products candies={this.state.candies} cart={this.state.cart} addToCart={this.addToCart} />
      	<Footer />
      </div>
    )
  }
}

export default App;
