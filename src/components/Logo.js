import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
       	<span className="first">Candy</span> 
       	<span className="second" role="img" aria-label="Candy">Shop 🍬</span>
      </div>
    );
  }
}

export default Logo;
