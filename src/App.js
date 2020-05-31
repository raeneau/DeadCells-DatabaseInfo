import React, { useState } from "react";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Screens.
import UserInputScreen from "./screens/UserInput";
import WeaponsScreen from "./screens/ItemsWeapons";
import EnemyScreen from "./screens/EnemyScreen";
import GrenadesScreen from "./screens/ItemsGrenades";

// Local modules.
import getViableJsons from "./utils/getAllViableJsons";

// Constants.
import nameMappings from "./constants/mapUserInput";
import inputTypes from "./constants/inputTypes";

// Styles.
import "./App.css";
import NotFoundScreen from "./screens/NotFound";
import NameConflictScreen from "./screens/NameConflictScreen";

// -----------------------------------------------------------------------------

// Extract constants.
const { MELEE_WEAPON, RANGED_WEAPON, SHIELD, ENEMY, GRENADE } = inputTypes;

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
    resourceType: undefined,
  });

  const handleChange = (newValue) => {
    // Format user input to be all uppercase with no spaces, to match the
    // file import object keys
    // TODO: ACTUALLY format this and return an object with {INTERNAL_ID, TYPE}
    // TODO: MOVE THIS IS A COMMON UTIL
    const formattedUserInput = String(newValue)
      .toUpperCase()
      .replace(/\s/g, "")
      .replace(/'/g, "");

    const mappedUserInput = nameMappings[formattedUserInput] || {
      INTERNAL_ID: formattedUserInput,
    };
    const type = _get(mappedUserInput, "TYPE");

    // If the type is an array, there are multiple entries!
    if (Array.isArray(type)) {
      setValue({
        nameConflict: true,
        searchTerm: newValue,
        resourceType: type,
      });
    }
    // If the user input is undefined, there is no result for this search
    else if (mappedUserInput === undefined) {
      setValue({ searchTerm: newValue });
    }
    // Otherwise, we found a match!
    else {
      const jsonArray = getViableJsons(mappedUserInput);
      setValue({
        searchTerm: newValue,
        jsonArrays: jsonArray,
        resourceType: type,
      });
    }
  };

  const { searchTerm, jsonArrays = {}, nameConflict, resourceType } = value;

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen onChange={handleChange} />
      {(resourceType === MELEE_WEAPON ||
        resourceType === RANGED_WEAPON ||
        resourceType === SHIELD) && <WeaponsScreen userInput={jsonArrays} />}
      {resourceType === ENEMY && <EnemyScreen userInput={jsonArrays} />}
      {resourceType === GRENADE && <GrenadesScreen userInput={jsonArrays} />}
      {!nameConflict && !_isEmpty(searchTerm) && _isEmpty(jsonArrays) && (
        <NotFoundScreen userSearchTerm={searchTerm} />
      )}
      {nameConflict === true && (
        <NameConflictScreen
          searchTerm={searchTerm}
          conflictTypes={resourceType}
        />
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
