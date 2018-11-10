import React from "react";

class VisitUsInfo extends React.Component {
  
  render() {
    return (
      <div className="visit-us-info">
        <p>Have you already decided, what you want to try
        in our delicious Candy Shop? Great!</p>
        <p>Come and visit us, here are the hours we will
        welcome you with pleasure in our place:</p>
        <div className="open-hours">
          <span>Monday</span><span> 8 a.m. - 9 p.m.</span>
          <span>Tuesday </span><span>8 a.m. - 9 p.m.</span>
          <span>Wednesday </span><span>8 a.m. - 9 p.m.</span>
          <span>Thursday </span><span>8 a.m. - 9 p.m.</span>
          <span>Friday </span><span>8 a.m. - 9 p.m.</span>
          <span>Saturday </span><span>8 a.m. - 9 p.m.</span>
          <span>Sunday</span><span> 8 a.m. - 9 p.m. </span>
        </div>
      </div>
    );
  }
}

export default VisitUsInfo;