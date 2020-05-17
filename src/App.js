import React, { useState } from "react";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Screens.
import UserInputScreen from "./screens/UserInput";
import ItemsScreen from "./screens/ItemsWeapons";
import EnemyScreen from "./screens/EnemyScreen";

// Local modules.
import getViableJsons from "./utils/getAllViableJsons";

// Constants.
import nameMappings from "./constants/nameMappings";

// Styles.
import "./App.css";
import NotFoundScreen from "./screens/NotFound";

// -----------------------------------------------------------------------------

const cnBase = "App";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};
function App() {
  const [value, setValue] = useState({
    userSearchTerm: "",
    jsonArrays: [],
  });

  const handleChange = (newValue) => {
    // Format user input to be all uppercase with no spaces, to match the
    // file import object keys
    // TODO: ACTUALLY format this and return an object with {INTERNAL_ID, TYPE}
    const formattedUserInput = String(newValue)
      .toUpperCase()
      .replace(/\s/g, "");

    const mappedUserInput = nameMappings[formattedUserInput] || {
      INTERNAL_ID: formattedUserInput,
    };

    // TODO: Uncomment when everything is mapped
    // if (mappedUserInput === undefined) {
    //   setValue({ userSearchTerm: newValue });
    // } else {
    const jsonArray = getViableJsons(mappedUserInput);
    setValue({ userSearchTerm: newValue, jsonArrays: jsonArray });
    // }
  };

  const { userSearchTerm, jsonArrays = {} } = value;

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen onChange={handleChange} />
      {_get(jsonArrays, "itemJson") !== undefined && (
        <ItemsScreen userInput={jsonArrays} />
      )}
      {_get(jsonArrays, "enemyJson") !== undefined && (
        <EnemyScreen userInput={jsonArrays} />
      )}
      {!_isEmpty(userSearchTerm) && _isEmpty(jsonArrays) && (
        <NotFoundScreen userSearchTerm={userSearchTerm} />
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
