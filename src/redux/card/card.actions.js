import {
  //
  ADD_CARD,
  REMOVE_CARD,
  SORT_CARDS,
} from './card.types';

// ADD CARD
export const addCard = value => {
  return {
    type: ADD_CARD,
    payload: value,
  };
};
// REMOVE CARD
export const removeCard = id => {
  return {
    type: REMOVE_CARD,
    payload: id,
  };
};

export const sortCards = () => {
  return {
    type: SORT_CARDS,
  };
};
