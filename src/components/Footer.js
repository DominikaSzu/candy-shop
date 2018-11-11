import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
		<span className="first-span" role="img" aria-label="Candy"><span className="company-name">Candy Shop</span> 🍬</span>
		<span className="second-span" role="img" aria-label="Heart"><a href="https://bit.ly/2z4jzzt">Me ♥</a></span>
      </div>
    );
  }
}

export default Footer;
