import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import companyFoto from "../company.jpg";

class AboutUs extends React.Component {
  
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
      <div className="about-us">
        <Logo />
		<Navbar navigateToHome={this.navigateToHome} 
                navigateToCompanyInfo={this.navigateToCompanyInfo}
                navigateToMap={this.navigateToMap}/>
		<div className="info-about-us">
			<h3 className="company">Candy Shop
			</h3>
			<img src={companyFoto} alt="Our Company"/>
			<p className="desc">
			Brownie cake cupcake sugar plum soufflé tiramisu dragée I love. Gummies topping chupa chups. Cupcake tart icing gummies cotton candy fruitcake. Oat cake soufflé apple pie gummi bears cookie wafer cupcake chocolate cake powder.
Tootsie roll I love halvah dragée donut muffin pudding cupcake. Danish bonbon bear claw jelly beans marzipan biscuit marzipan I love. Sesame snaps danish ice cream chocolate bar donut cotton candy carrot cake powder. I love icing toffee caramels I love jelly beans.
			</p>
		</div>
		<Footer />
      </div>
    );
  }
}

export default AboutUs;
