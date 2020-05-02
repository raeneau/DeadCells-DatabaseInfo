import React, { useState, Fragment } from 'react';
import './App.css';

import UserInputScreen from './userInputScreen';

// -----------------------------------------------------------------------------

function App() {
  const [value, setValue] = useState("");
  let formattedUserInput;

  const handleChange = (newValue) => {
      formattedUserInput = String(newValue).toLowerCase();
      console.log('i am dev yessss', newValue);
      setValue(newValue);
  }

  return (
    <Fragment>
      {value === '' && <UserInputScreen onChange={handleChange} /> }
    </Fragment>
    );
}

// -----------------------------------------------------------------------------

export default App;
