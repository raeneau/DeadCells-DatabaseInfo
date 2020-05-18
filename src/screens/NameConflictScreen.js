import React from "react";
import _get from "lodash.get";

// Local Modules.
import enemyNames from "../constants/mapUserInput/mapUserInputEnemyNames";
import shieldNames from "../constants/mapUserInput/mapUserInputShieldNames";

// Constants.
import inputTypes from "../constants/inputTypes";

// Styles.
import "./NameConflictScreen.css";

// -----------------------------------------------------------------------------

const cnBase = "NameConflictScreen";
const cn = {
  searchTerm: `${cnBase}__searchTerm`,
  possibleMatches: `${cnBase}__possibleMatches`,
  notesWrapper: `${cnBase}__notesWrapper`,
};

// TODO: MOVE TO COMMON UTILS FOLDER
const getNameFromType = ({ searchTerm, type }) => {
  const formattedTerm = String(searchTerm).toUpperCase().replace(/\s/g, "");

  switch (type) {
    case inputTypes.SHIELD: {
      return `${
        shieldNames[formattedTerm].NAME
      } (${inputTypes.SHIELD.toLowerCase()})`;
    }
    case inputTypes.ENEMY: {
      return `${
        enemyNames[formattedTerm].NAME
      } (${inputTypes.ENEMY.toLowerCase()})`;
    }
    default: {
      return undefined;
    }
  }
};

function NameConflictScreen(props) {
  const searchTerm = _get(props, "searchTerm");
  const conflictTypes = _get(props, "conflictTypes");

  return (
    <div className="DisplayCard">
      <div className={cn.notesWrapper}>
        <h2>Name Conflict</h2>
        <div>Uh oh! There are multiple entries for the term:</div>
        <div className={cn.searchTerm}>{searchTerm}</div>
        <div>It looks like these might be what you were looking for:</div>
        <ul className={cn.possibleMatches}>
          {conflictTypes.map((type, index) => (
            <li key={`NameConflictScreen__${type[index]}`}>
              {getNameFromType({ searchTerm, type })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default NameConflictScreen;
