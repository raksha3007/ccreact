import React from "react";
import ReactDOM from "react-dom";


function Grocery(){
    const names = [
        {
          "item": "Dal",
          "type": "veg"
        },
        {
          "item": "Fish",
          "type": "non-veg"
        },
        {
          "item": "Meat",
          "type": "non-veg"
        },
        {
          "item": "Rice",
          "type": "veg"
        }
      ]
      const Grocery = names.map(name => <p>{name.item},{name.type}</p>
      )
    return(
        <div>{Grocery}</div>
        );
}
export default Grocery;