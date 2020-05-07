import React, { useState, Fragment } from "react";
import "./App.css";

import UserInputScreen from "./userInputScreen";
import ItemsWeapons from "./items/weapons";
import mapUserInput from "./utils/mapUserInput";

// -----------------------------------------------------------------------------

const cnBase = "App";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};
function App() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    // Format user input to be all uppercase with no spaces, to match the
    // file import object keys
    const formattedUserInput = String(newValue)
      .toUpperCase()
      .replace(/\s/g, "");
    const itemName = mapUserInput(formattedUserInput);
    setValue(itemName);
  };

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen onChange={handleChange} />
      {value !== "" && <ItemsWeapons userInput={value} />}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
