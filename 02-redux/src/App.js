import React from 'react';
import './App.css';
import {proba} from './01-redux-basic';
import {reduxBasic02} from './02-redux-basic';

function App() {
  return (
    <>
        <h1>

            Learn React
            {proba()}

        </h1>
        <hr/>
        <h1>
            Learn Redux
            {reduxBasic02()}
        </h1>
    </>
  );
}

export default App;
