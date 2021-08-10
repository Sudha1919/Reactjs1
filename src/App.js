import React from 'react';
import './style.css';

//Components
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import Arrow from './Components/Arrow';

function App() {
  return (
    <div>
      <Arrow />
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}
export default App;
