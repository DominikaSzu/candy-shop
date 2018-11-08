import React from 'react';

class Navbar extends React.Component {
  render() {
	const { navigateToHome, navigateToCompanyInfo, navigateToMap } = this.props;

    return (
      <div className="navbar">
       	<span className="home" onClick={navigateToHome} ><i className="fas fa-home"></i></span>
       	<span className="company" onClick={navigateToCompanyInfo} ><i className="fas fa-users"></i></span>
       	<span className="position" onClick={navigateToMap} ><i className="fas fa-globe-africa"></i></span>
      </div>
    );
  }
}

export default Navbar;
