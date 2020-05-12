import _get from "lodash.get";
import _map from "lodash.map";
import _filter from "lodash.filter";
import _isEmpty from "lodash.isempty";

// Local modules.
import levelJsons from "./jsonImports/levelJsons";

// -----------------------------------------------------------------------------

export default ({ enemy }) => {
  const levelJsonValues = Object.values(levelJsons);

  // TODO: Move this to only be run once on startup
  // Take the giant level JSONs and only return an array of mobs along with
  // and ID for the biome
  const allEnemyLocations = _map(levelJsonValues, (level) => ({
    mobs: _map(_get(level, "mobs"), (mob) => ({
      name: _get(mob, "mob"),
      minDifficulty: _get(mob, "minDifficulty", 0),
      maxDifficulty: _get(mob, "maxDifficulty"),
    })),
    id: _get(level, "id"),
  }));

  const currentEnemyLocations = [];
  const enemyId = _get(enemy, "enemyJson.id");

  // TODO: This is kind of disgusting? Maybe refactor it??
  _map(allEnemyLocations, (element) => {
    const onlyEnemy = _filter(
      _get(element, "mobs"),
      (oneEnemy) => oneEnemy.name === enemyId,
    );

    if (!_isEmpty(onlyEnemy)) {
      currentEnemyLocations.push({
        minDifficulty: onlyEnemy[0].minDifficulty,
        maxDifficulty: onlyEnemy[0].maxDifficulty,
        name: _get(element, "id"),
      });
    }
  });

  return currentEnemyLocations;
};
