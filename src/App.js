import React, { useState } from "react";
import "./App.css";

import UserInputScreen from "./screens/UserInput";
import ItemsScreen from "./screens/Items";
import getViableJsons from "./utils/getViableJsons";
import EnemyScreen from "./screens/EnemyScreen";

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

    console.log("hm", formattedUserInput);

    setValue(jsonArray);
  };

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen onChange={handleChange} />
      {value !== "" && <ItemsScreen userInput={value} />}
      {value !== "" && <EnemyScreen userInput={value} />}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
