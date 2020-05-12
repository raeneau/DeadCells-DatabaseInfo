import React, { useState } from "react";
import _get from "lodash.get";

// Screens.
import UserInputScreen from "./screens/UserInput";
import ItemsScreen from "./screens/ItemsWeapons";
import EnemyScreen from "./screens/EnemyScreen";

// Local modules.
import getViableJsons from "./utils/getAllViableJsons";

// Styles.
import "./App.css";

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
    const jsonArray = getViableJsons(formattedUserInput);
    console.log("JSON Array:", jsonArray);
    setValue(jsonArray);
  };

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen onChange={handleChange} />
      {_get(value, "itemJson") !== undefined && (
        <ItemsScreen userInput={value} />
      )}
      {_get(value, "enemyJson") !== undefined && (
        <EnemyScreen userInput={value} />
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
