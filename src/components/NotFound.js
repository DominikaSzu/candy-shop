import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import coffeeFoto from "../coffee.jpg";

class NotFound extends React.Component {
 
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
    	<div className="not-found">
    		<Logo />
    		<Navbar navigateToHome={this.navigateToHome} 
                navigateToCompanyInfo={this.navigateToCompanyInfo}
                navigateToMap={this.navigateToMap}/>
       			<div className="lost">
					<img src={coffeeFoto} alt="Coffee time"/>
					<p>Hi there, it seems you got lost <span role="img" aria-label="Smile">😅</span>
          Take a coffee and try to find 
          what You're looking for on a Home page <span role="img" aria-label="Smile">😊</span></p>
       			</div>
     		 <Footer />
    	</div>    
    );
  }
}

export default NotFound;
