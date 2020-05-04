import React, { useState, Fragment } from 'react';
import './App.css';

import UserInputScreen from './userInputScreen';
import Items from './items';
import mapUserInput from './utils/mapUserInput';

// -----------------------------------------------------------------------------

function App() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    // Format user input to be all uppercase with no spaces, to match the
    // file import object keys
    const formattedUserInput = String(newValue).toUpperCase().replace(/\s/g, '');
    const itemName = mapUserInput(formattedUserInput);
    setValue(itemName);
  }

  return (
    <Fragment>
      <UserInputScreen onChange={handleChange} />
      {value !== '' && <Items userInput={value}/>}
      </Fragment>
    );
}

// -----------------------------------------------------------------------------

export default App;
