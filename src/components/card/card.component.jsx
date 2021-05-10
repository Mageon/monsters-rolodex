import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img className="cis" src={`https://robohash.org/${props.monster.id}?set=set2`} alt={`Monster ${props.monster.id}`} />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
