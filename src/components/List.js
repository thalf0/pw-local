import React from "react";
import Card from "./Card";

const List = (props) => {
   console.log(props);
   
   const deletePasswordHandler = (id) => {
      props.getPasswordId(id);
   };

   const updatePasswordHandler = (id) => {
      props.getPasswordId(id)
   }

   const renderList = props.passwords.map((password) => {
      return (
         <Card 
         password={password} 
         clickHandler={deletePasswordHandler} 
         editHandler={updatePasswordHandler}
         key={ password.id }
         />
      );
   });
   return (
      <div className="ui celled list">
         <br></br><h2>Password List</h2>
         {renderList}<br></br><br></br><br></br>
      </div>
   )

}

export default List;