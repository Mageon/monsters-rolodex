import React from "react";
import './card-list.style.css';

export const Cardlist = (props) => {
  // props refers to Properties of the Cardlist element
  console.log(props);
  return <div className="card-list">{props.children}</div>;
  // props.children, refers to the elements between the tags of Cardlist element
};