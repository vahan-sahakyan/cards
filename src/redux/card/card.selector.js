import { createSelector } from 'reselect';

const selectCard = state => state.card;

export const selectAllCards = createSelector([selectCard], card => card.cards);
