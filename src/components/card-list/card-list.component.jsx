import React from "react";
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const Cardlist = (props) => {
  // props refers to Properties of the Cardlist element
  console.log(props);
  // console.log(props.children);
  // props.children, refers to the elements between the tags of Cardlist element

  return (
    <div className="card-list">
      {
        props.monsters.map(
          (monster) => (            
            <Card key={monster.id} monster={monster} />
          )
        )
      }
    </div>
  );
};