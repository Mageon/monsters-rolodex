import React from "react";
import './card-list.style.css';

export const Cardlist = (props) => {
  // props refers to Properties of the Cardlist element
  console.log(props);
  // console.log(props.children);
  // props.children, refers to the elements between the tags of Cardlist element

  return <div className="card-list">
     {
            props.monsters.map(
              (monster) => (
                <h1>{monster.name}</h1>
              )
            )
          }
  </div>;
};