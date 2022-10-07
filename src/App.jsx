import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import TheLayout from './components/TheLayout/TheLayout';
import { selectAllCards } from './redux/card/card.selector';

function App() {
  return (
    <div className='App'>
      <TheLayout />
    </div>
  );
}

export default App;
