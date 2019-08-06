import React from 'react';
import { Card } from '../card/Card';
import './CardList.css';

export const CardList = props => (
  <div className="CardList">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
