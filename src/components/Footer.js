import React from "react";

const Footer = () => {
   return (
      <div className="ui vertical footer segment" style={{
         position: "fixed",
         backgroundColor: "white",
         bottom: "0",
         textAlign: "center",
         borderTop: "solid 0.5px black",
      }}>
         <div className="ui container">
            The Ally Ford Development 2024. All Rights Reserved
         </div>
      </div>
   )
}

export default Footer;