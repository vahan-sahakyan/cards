import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllCards } from '../../../redux/card/card.selector';
import Card from '../../Card/Card';
import './MainContainer.scss';

const MainContainer = () => {
  const cards = useSelector(selectAllCards);
  return (
    <div className='main-container'>
      {!cards.length ? (
        <h1 className='no-cards'>No Cards</h1>
      ) : (
        <div className='cards'>
          {cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};
export default MainContainer;
