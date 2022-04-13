import React, { useState } from "react";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Screens.
import UserInputScreen from "./screens/UserInput";
import WeaponsScreen from "./screens/ItemsMelee";
import RangedWeaponsScreen from "./screens/ItemsRanged";
import ShieldsScreen from "./screens/ItemsShields";
import GrenadesScreen from "./screens/ItemsGrenades";
import TrapScreen from "./screens/ItemsTraps";
import PowersScreen from "./screens/ItemsPowers";
import EnemyScreen from "./screens/EnemyScreen";
import BiomesScreen from "./screens/LevelsScreen";
import NotFoundScreen from "./screens/NotFound";
import NameConflictScreen from "./screens/NameConflictScreen";
import FeedbackScreen from "./screens/FeedbackScreen";

// Local modules.
import getViableJsons from "./utils/getAllViableJsons";
import formatInput from "./utils/formatInput";

// Constants.
import nameMappings from "./constants/mapUserInput";
import inputTypes from "./constants/inputTypes";
import { STABLE } from "./constants/databaseVersion";

// Styles.
import "./App.css";

// -----------------------------------------------------------------------------

// Extract constants.
const {
  MELEE_WEAPON,
  RANGED_WEAPON,
  SHIELD,
  ENEMY,
  GRENADE,
  TRAP,
  LEVEL,
  POWER,
} = inputTypes;

// -----------------------------------------------------------------------------

let databaseVersion = STABLE;
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
    internalId: undefined,
  });

  const handleDatabaseChange = (updatedDatabaseVersion) => {
    databaseVersion = updatedDatabaseVersion;
  };

  const handleUserInputChange = (newValue) => {
    // Format user input to be all uppercase with no spaces, to match the
    // file import object keys
    const formattedUserInput = formatInput(newValue);

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
      const jsonArray = getViableJsons({
        userInput: mappedUserInput,
        databaseVersion,
      });
      setValue({
        searchTerm: newValue,
        jsonArrays: jsonArray,
        resourceType: type,
        internalId: _get(mappedUserInput, "INTERNAL_ID"),
        name: _get(mappedUserInput, "NAME"),
      });
    }
  };

  const {
    searchTerm,
    jsonArrays = {},
    nameConflict,
    resourceType,
    internalId,
    name,
  } = value;

  const validJson = !_isEmpty(jsonArrays);

  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen
        onChange={handleUserInputChange}
        onDatabaseChange={handleDatabaseChange}
      />
      {validJson && resourceType === MELEE_WEAPON && (
        <WeaponsScreen
          userInput={jsonArrays}
          internalId={internalId}
          name={name}
        />
      )}
      {validJson && resourceType === RANGED_WEAPON && (
        <RangedWeaponsScreen
          userInput={jsonArrays}
          internalId={internalId}
          name={name}
        />
      )}
      {validJson && resourceType === SHIELD && (
        <ShieldsScreen
          userInput={jsonArrays}
          internalId={internalId}
          name={name}
        />
      )}
      {validJson && resourceType === ENEMY && (
        <EnemyScreen
          userInput={jsonArrays}
          databaseVersion={databaseVersion}
          name={name}
        />
      )}
      {validJson && resourceType === GRENADE && (
        <GrenadesScreen
          userInput={jsonArrays}
          internalId={internalId}
          name={name}
        />
      )}
      {validJson && resourceType === TRAP && (
        <TrapScreen
          userInput={jsonArrays}
          internalId={internalId}
          name={name}
        />
      )}
      {validJson && resourceType === POWER && (
        <PowersScreen
          userInput={jsonArrays}
          internalId={internalId}
          name={name}
        />
      )}
      {validJson && resourceType === LEVEL && (
        <BiomesScreen userInput={jsonArrays} name={name} />
      )}
      {!nameConflict && !_isEmpty(searchTerm) && _isEmpty(jsonArrays) && (
        <NotFoundScreen userSearchTerm={searchTerm} />
      )}
      {nameConflict === true && (
        <NameConflictScreen
          searchTerm={searchTerm}
          conflictTypes={resourceType}
        />
      )}
      <FeedbackScreen />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
