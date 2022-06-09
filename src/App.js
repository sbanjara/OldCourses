import './App.css';
import React, {useEffect, useState} from 'react';
import {Selection} from './components/Selection';

function App() {
  return (
    <div className="App">
       <h1>Find Available Courses</h1>
      <Selection />
    </div>
  );

}

export default App;
