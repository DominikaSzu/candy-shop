import React from "react";
import Product from "./Product";

class Products extends React.Component {
  render() {
    return (
      <div className="products">
       	<Product />
       	<Product />
       	<Product />
       	<Product />
      </div>
    );
  }
}

export default Products;
