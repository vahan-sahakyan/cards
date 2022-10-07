import React from 'react';
import './TheLayout.scss';
import MainContainer from './MainContainer/MainContainer';
import TheFooter from './TheFooter/TheFooter';
import TheHeader from './TheHeader/TheHeader';
import TheSidebar from './TheSidebar/TheSidebar';

function TheLayout() {
  return (
    <div className="the-layout">
      <TheHeader />
      <MainContainer />
      <TheSidebar />
      <TheFooter />
    </div>
  );
}

export default TheLayout;
