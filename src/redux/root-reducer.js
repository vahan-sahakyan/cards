import { combineReducers } from 'redux';
import cardReducer from './card/card.reducer';

const rootReducer = combineReducers({
  card: cardReducer,
});

export default rootReducer;
