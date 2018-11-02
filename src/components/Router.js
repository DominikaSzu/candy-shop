import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import AboutUs from "./AboutUs";
import NotFound from "./NotFound";
import Cart from "./Cart";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
      	<Switch>
      		<Route exact path="/" component={App}></Route>
      		<Route exact path="/about-us" component={AboutUs}></Route>
          <Route exact path="/cart" component={Cart}></Route>
      		<Route component={NotFound}></Route>
      	</Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
