import React from "react";

class Product extends React.Component {
  render() {
    const { img, name, desc} = this.props.info;

    return (
      <div className="product">
		<img src={img} alt={name} />
		<h3>{name}</h3>
		<p>{desc}</p>
		<button type="submit">Add To Cart</button>
      </div>
    );
  }
}

export default Product;
