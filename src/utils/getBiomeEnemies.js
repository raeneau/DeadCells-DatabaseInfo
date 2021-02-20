import _get from "lodash.get";
import _map from "lodash.map";
import _filter from "lodash.filter";
import _uniq from "lodash.uniq";

// Constants.
import mapUserInputEnemyNames from "../constants/mapUserInput/mapUserInputEnemyNames";

// Local modules.
import { formatDifficultyWithObjects } from "./formatBossCellDifficulty";
import formatInput from "./formatInput";

// -----------------------------------------------------------------------------

export default ({ jsonMobsArray }) => {
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

  return enemiesWithDifficulties;
};
