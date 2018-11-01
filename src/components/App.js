import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
      	<Logo />
      	<Navbar />
      	<Products />
      	<Footer />
      </div>
    );
  }
}

export default App;
