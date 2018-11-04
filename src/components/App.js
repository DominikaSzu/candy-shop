import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";


class App extends React.Component {

  state = {
    candies: {},
    cart: {}
  }

  render() {
    return (
      <div className="wrapper">
      	<Logo />
      	<Navbar />
      	<Products />
      	<Footer />
      </div>
    )
  }
}

export default App;
