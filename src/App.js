import React, { useState, Fragment } from "react";
import langStuff from "./database/lang/main.en-US.mo";
import "./App.css";

import UserInputScreen from "./userInputScreen";
import ItemsWeapons from "./items/weapons";
import mapUserInput from "./utils/mapUserInput";
import EnemyPage from "./enemies";

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
    // TODO: ACTUALLY format this and return an object with {INTERNAL_ID, TYPE}
    const formattedUserInput = String(newValue)
      .toUpperCase()
      .replace(/\s/g, "");
    const itemArray = mapUserInput(formattedUserInput);

    console.log("??????????", formattedUserInput);
    setValue(formattedUserInput);
  };

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen onChange={handleChange} />
      {value === "" && <ItemsWeapons userInput={value} />}
      {value !== "" && <EnemyPage userInput={value} />}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
