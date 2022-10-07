import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cardReducer from './card/card.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['card'],
};
const rootReducer = combineReducers({
  card: cardReducer,
});

export default persistReducer(persistConfig, rootReducer);
