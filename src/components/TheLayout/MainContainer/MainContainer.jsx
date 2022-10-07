import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCards } from '../../../redux/card/card.selector';
import Card from '../../Card/Card';
import './MainContainer.scss';

const MainContainer = () => {
  const cards = useSelector(selectAllCards);
  return (
    <div
      //
      // style={{ overflowY: 'scroll' }}
      className="main-container"
    >
      {!cards.length ? (
        <h1>No Cards</h1>
      ) : (
        <div className="cards">
          {cards.map(card => (
            <Card {...card} />
          ))}
        </div>
      )}
    </div>
  );
};
export default MainContainer;
