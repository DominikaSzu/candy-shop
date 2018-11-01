import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
       	<span className="home"><i className="fas fa-home"></i></span>
       	<span className="about-us"><i className="fas fa-users"></i></span>
       	<span className="basket"><i className="fas fa-shopping-basket"></i></span>
      </div>
    );
  }
}

export default Navbar;
