import _get from "lodash.get";
import _map from "lodash.map";
import _filter from "lodash.filter";
import _isEmpty from "lodash.isempty";

// Constants.
import locationNameMap from "../constants/biomes";

// Local modules.
import { levelJsons } from "./jsonImports";
import formatBossCellDifficulty from "./formatBossCellDifficulty";

// -----------------------------------------------------------------------------

export default ({ enemy }) => {
  const levelJsonValues = Object.values(levelJsons);

  // TODO: Move this to only be run once on startup
  // Take the giant level JSONs and only return an array of mobs along with
  // and ID for the biome. This array WILL have duplicates if the mob has
  // multiple entries in the CDB (like when they have different BC entries)
  const allEnemyLocations = _map(levelJsonValues, (level) => ({
    mobs: _map(_get(level, "mobs"), (mob) => ({
      name: _get(mob, "mob"),
      minDifficulty: _get(mob, "minDifficulty", 0),
      // If maximum is undefined, then the max is the current highest difficulty (5BC)
      maxDifficulty: _get(mob, "maxDifficulty", 5),
    })),
    id: _get(level, "id"),
  }));

  const currentEnemyLocations = [];
  const enemyId = _get(enemy, "enemyJson.id");

  // TODO: Rename a bunch of these confusing variables perhaps
  _map(allEnemyLocations, (element) => {
    const enemyEntry = _filter(
      _get(element, "mobs"),
      (oneEnemy) => oneEnemy.name === enemyId,
    );

    if (!_isEmpty(enemyEntry)) {
      // Find the minimum and maximum directly
      const minDifficulty = enemyEntry.reduce((acc, loc) =>
        acc.minDifficulty < loc.minDifficulty ? acc : loc,
      );
      const maxDifficulty = enemyEntry.reduce((acc, loc) =>
        acc.maxDifficulty > loc.maxDifficulty ? acc : loc,
      );

      const locationName = _get(element, "id");
      currentEnemyLocations.push({
        difficulty: formatBossCellDifficulty({
          minDifficultyObject: minDifficulty,
          maxDifficultyObject: maxDifficulty,
        }),
        name: locationNameMap[locationName] || locationName,
      });
    }
  });

  return currentEnemyLocations;
};
