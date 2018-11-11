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
        <Logo navigateToHome={this.navigateToHome} />
		<Navbar navigateToHome={this.navigateToHome} 
                navigateToCompanyInfo={this.navigateToCompanyInfo}
                navigateToMap={this.navigateToMap}/>
		<div className="info-about-us">
			<h3 className="company">Candy Shop
			</h3>
			<img src={companyFoto} alt="One of our empoyees preparing the cake."/>
			<p className="desc">
			Our idea to create the Candy Shop was born in the evening of cold, Friday in November 2017.
      We were walking in the city centre, trying to find some nice place, where we could just sit down,
      buy a really good coffee and a piece of an amazing cake (as we are always hungry). After two hours of walking, we have noticed that there is no such a place. At that very moment, all 6 of us (Joey, Phoebe,
        Ross, Chandler, Monika and Rachel) have decided that it's about the time to create such a place. 
        One year later, here we are for you, with our Candy Shop! 
			</p>
		</div>
		<Footer />
      </div>
    );
  }
}

export default AboutUs;
