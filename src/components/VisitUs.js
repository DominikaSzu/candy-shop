import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MapContainer from "./MapContainer";
import VisitUsInfo from "./VisitUsInfo";

class VisitUs extends React.Component {
  
    navigateToHome = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  }

  navigateToCompanyInfo = (e) => {
    e.preventDefault();
    this.props.history.push("/about-us");
  }

  navigateToMap = (e) => {
    e.preventDefault();
    this.props.history.push("/visit-us");
  }


  render() {
    return (
      <div className="visit-us">
		    <Logo />
		    <Navbar navigateToHome={this.navigateToHome} 
                navigateToCompanyInfo={this.navigateToCompanyInfo}
                navigateToMap={this.navigateToMap}/>
        <VisitUsInfo />
		    <MapContainer  />
		    <Footer />
      </div>
    );
  }
}

export default VisitUs;