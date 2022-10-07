import React from 'react';
import './TheSidebar.scss';

const TheSidebar = () => {
  return (
    <div className="the-sidebar">
      <h5>Press "Add Card"</h5>
      <pre>to add the new Card</pre>
      <br />
      <h5>Use the "Sort Cards" button</h5>
      <pre>to sort the Cards by{'\n'}the increase</pre>
      <br />
      <h5>Press an X icon</h5>
      <pre>on the top-right{'\n'}to delete them</pre>
    </div>
  );
};
export default TheSidebar;
