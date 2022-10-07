import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/card/card.actions';
import './Card.scss';

const Card = ({ value, id }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeCard(id));
  };
  return (
    <div className='card'>
      <span onClick={handleRemove}>&#10005;</span>
      <h3>{value}</h3>
    </div>
  );
};
export default Card;
