import React from "react";
import _isEmpty from "lodash.isempty";
import _get from "lodash.get";
import _map from "lodash.map";
import _uniq from "lodash.uniq";
import _filter from "lodash.filter";
import { formatDifficultyWithObjects } from "../../utils/formatBossCellDifficulty";
import mapUserInputEnemyNames from "../../constants/mapUserInput/mapUserInputEnemyNames";
import formatInput from "../../utils/formatInput";

// -----------------------------------------------------------------------------

const Enemies = (props) => {
  const { userInput } = props;

  // TODO: This aint an item json
  const jsonMobsArray = _get(userInput, "itemJson.mobs", []);

  const allEnemies = _map(jsonMobsArray, (mob) => ({
    name: _get(mob, "mob"),
    minDifficulty: _get(mob, "minDifficulty", 0),
    // If maximum is undefined, then the max is the current highest difficulty (5BC)
    maxDifficulty: _get(mob, "maxDifficulty", 5),
  }));

  // Get only the enemy names, remove all duplicates with uniq
  const enemyNameKeys = _uniq(_map(allEnemies, (enemyName) => enemyName.name));

  // Keep track of
  const enemiesWithDifficulties = [];

  // For each enemy name, search the list of enemies for this biome.
  // This is so if there are multiple entries, the correct BC range can be used.
  enemyNameKeys.forEach((enemyKey) => {
    const currentEnemyEntries = _filter(
      allEnemies,
      (enemy) => enemy.name === enemyKey,
    );

    const minDifficulty = currentEnemyEntries.reduce((acc, loc) =>
      acc.minDifficulty < loc.minDifficulty ? acc : loc,
    );
    const maxDifficulty = currentEnemyEntries.reduce((acc, loc) =>
      acc.maxDifficulty > loc.maxDifficulty ? acc : loc,
    );

    enemiesWithDifficulties.push({
      difficulty: formatDifficultyWithObjects({
        minDifficultyObject: minDifficulty,
        maxDifficultyObject: maxDifficulty,
      }),
      name: mapUserInputEnemyNames[formatInput(enemyKey)],
    });
  });

  console.log("jsonMobsArray :>> ", enemiesWithDifficulties);

  // {enemies.map((enemy) => (
  //   <tr key={`Enemies__enemy${enemy.name}`}>
  //     <td>{enemy.name}</td>
  //     <td>{enemy.difficulty}</td>
  //   </tr>
  // ))}

  // console.log("nenemies", enemies);
  return (
    <div>
      <h3 className="SubHeader">Enemies</h3>
      {!_isEmpty() ? (
        <table>
          <tbody>ye</tbody>
        </table>
      ) : (
        <>
          <div className="notFoundWrapper">N/A</div>
        </>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------------

export default Enemies;
