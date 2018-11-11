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

  navigateToMap = (e) => {
    e.preventDefault();
    this.props.history.push("/visit-us");
  }

  addToCart = (element) => {
    const cart = {...this.state.cart};
    cart[element] = cart[element] +1 || 1;
    this.setState({ cart });
  }

  render() {
    
    return (
      <div className="wrapper">
      	<Logo navigateToHome={this.navigateToHome} />
      	<Navbar navigateToHome={this.navigateToHome} 
                navigateToCompanyInfo={this.navigateToCompanyInfo}
                navigateToMap={this.navigateToMap}
        />
      	<Products candies={this.state.candies} cart={this.state.cart} addToCart={this.addToCart} />
      	<Footer />
      </div>
    )
  }
}

export default App;
