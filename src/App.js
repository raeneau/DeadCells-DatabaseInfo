import React, { useState, Fragment } from 'react';
import './App.css';

import UserInputScreen from './userInputScreen';
import Items from './items';
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
      
      <Items/>
      </Fragment>
    );
}
//{value === '' && <UserInputScreen onChange={handleChange} /> }
//{value !== '' && 
// -----------------------------------------------------------------------------

export default App;
