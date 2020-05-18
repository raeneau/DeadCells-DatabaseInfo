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
import nameMappings from "./constants/mapUserInput";

// Styles.
import "./App.css";
import NotFoundScreen from "./screens/NotFound";
import NameConflictScreen from "./screens/NameConflictScreen";

// -----------------------------------------------------------------------------

const cnBase = "App";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};
function App() {
  const [value, setValue] = useState({
    searchTerm: "",
    jsonArrays: [],
    nameConflict: false,
    conflictTypes: undefined,
  });

  const handleChange = (newValue) => {
    // Format user input to be all uppercase with no spaces, to match the
    // file import object keys
    // TODO: ACTUALLY format this and return an object with {INTERNAL_ID, TYPE}
    // TODO: MOVE THIS IS A COMMON UTIL
    const formattedUserInput = String(newValue)
      .toUpperCase()
      .replace(/\s/g, "");

    const mappedUserInput = nameMappings[formattedUserInput] || {
      INTERNAL_ID: formattedUserInput,
    };

    if (Array.isArray(_get(mappedUserInput, "TYPE"))) {
      setValue({
        nameConflict: true,
        searchTerm: newValue,
        conflictTypes: _get(mappedUserInput, "TYPE"),
      });
    }
    // TODO: Uncomment when everything is mapped
    // if (mappedUserInput === undefined) {
    //   setValue({ searchTerm: newValue });
    // }
    else {
      const jsonArray = getViableJsons(mappedUserInput);
      setValue({ searchTerm: newValue, jsonArrays: jsonArray });
    }
  };

  const { searchTerm, jsonArrays = {}, nameConflict, conflictTypes } = value;

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen onChange={handleChange} />
      {_get(jsonArrays, "itemJson") !== undefined && (
        <ItemsScreen userInput={jsonArrays} />
      )}
      {_get(jsonArrays, "enemyJson") !== undefined && (
        <EnemyScreen userInput={jsonArrays} />
      )}
      {!nameConflict && !_isEmpty(searchTerm) && _isEmpty(jsonArrays) && (
        <NotFoundScreen userSearchTerm={searchTerm} />
      )}
      {nameConflict === true && (
        <NameConflictScreen
          searchTerm={searchTerm}
          conflictTypes={conflictTypes}
        />
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
