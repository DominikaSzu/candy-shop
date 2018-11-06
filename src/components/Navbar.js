import React from 'react';

class Navbar extends React.Component {
  render() {
	const { navigateToHome, navigateToCompanyInfo, navigateToCart } = this.props;

    return (
      <div className="navbar">
       	<span className="home" onClick={navigateToHome} ><i className="fas fa-home"></i></span>
       	<span className="company" onClick={navigateToCompanyInfo} ><i className="fas fa-users"></i></span>
       	<span className="basket" onClick={navigateToCart} ><i className="fas fa-shopping-basket"></i></span>
      </div>
    );
  }
}

export default Navbar;
