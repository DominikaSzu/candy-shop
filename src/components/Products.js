import React from "react";
import Product from "./Product";

class Products extends React.Component {
  render() {
    return (
      <div className="products">
        {Object.keys(this.props.candies).map(key => {
          return <Product key={key} info={this.props.candies[key]}/>
        }

          )
        }
      </div>
    );
  }
}

export default Products;
