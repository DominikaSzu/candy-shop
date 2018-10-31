import React, {Fragment} from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <Fragment>
      	<Logo />
      	<Navbar />
      	<Products />
      	<Footer />
      </Fragment>
    );
  }
}

export default App;
