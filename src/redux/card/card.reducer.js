import {
  //
  ADD_CARD,
  REMOVE_CARD,
  SORT_CARDS,
} from './card.types';

const initialState = {
  cards: [],
  uniqueId: 0,
};
const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    // DRUGDATA
    case ADD_CARD:
      return {
        ...state,
        uniqueId: state.uniqueId + 1,
        cards: [
          ...state.cards,
          {
            id: state.uniqueId,
            value: action.payload,
          },
        ],
      };
    case REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload),
      };
    case SORT_CARDS:
      return {
        ...state,
        cards: [...state.cards.sort((a, b) => a.value - b.value)],
      };
    default:
      return state;
  }
};
export default cardReducer;
