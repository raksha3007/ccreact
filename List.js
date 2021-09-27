import React from "react";
import ReactDOM from "react-dom";


function List(){
    const names = ['RAKSHA','raj','sumAN','NITHIN']
    return(
        <ol>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
        <li>{names[3]}</li>
    </ol>
    );
}
export default List;