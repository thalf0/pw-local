import React from "react";

const Header = () => {
   return (
      <div className="ui fixed menu">
          <div className="ui container center">
            <h1 style={{
               padding: "10px 100px 10px 0",
               fontSize: "30px",
               fontWeight: "800"
            }}>pwl0cal \\\ <span style={{fontWeight: "300", fontSize: "20px"}}>Local Password Manager</span></h1>
          </div>
      </div>
   )
}

export default Header;