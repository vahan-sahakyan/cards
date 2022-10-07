import React from 'react';
import { useDispatch } from 'react-redux';
import './TheHeader.scss';
import { addCard, sortCards } from '../../../redux/card/card.actions';
import Button from '../../Button/Button';

const TheHeader = () => {
  const dispatch = useDispatch();
  const handleAddCard = () => {
    const rand = Math.floor(Math.random() * 500);
    dispatch(addCard(rand));
  };
  const handleSortCards = () => {
    dispatch(sortCards());
  };
  return (
    <div className="the-header">
      <Button text="ADD CARD" type="primary" handler={handleAddCard} />
      <Button text="SORT CARDS" type="default" handler={handleSortCards} />
    </div>
  );
};
export default TheHeader;
