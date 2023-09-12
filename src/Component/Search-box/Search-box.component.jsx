import React from "react";
import "./Search-box.style.css"
export const SearchBox = ({placeholder,handelCange})=>{
   return(
     <input 
    className="search"
    type='search' 
    placeholder={placeholder}
    onChange={handelCange} ></input>

   )
}