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

  render() {
    
    return (
      <div className="wrapper">
      	<Logo />
      	<Navbar />
      	<Products candies={this.state.candies} />
      	<Footer />
      </div>
    )
  }
}

export default App;
