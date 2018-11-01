import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
       	<span className="home">Home</span>
       	<span className="about-us">About us</span>
       	<span className="basket">Trolley</span>
      </div>
    );
  }
}

export default Navbar;
