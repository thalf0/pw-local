import React from "react";

const Card = (props) => {
   const {id, sitename, website, email, username, password} = props.password;

   return (
      <div className="item">
            <div className="content">
               <a className="header" href={website} target="_blank">
                  {sitename}
               </a>
               <div>Email:  {email}</div>
               <div>Username:  {username}</div>
               <div>Password: {password}</div>
            </div>
            <i 
            className="trash alternate outline icon" 
            style={{color:"red", marginTop: "7px"}} 
            onClick={() => props.clickHandler(id)}
            ></i>
         </div>
   )
}

export default Card;