import _get from "lodash.get";
import _map from "lodash.map";
import _uniq from "lodash.uniq";

import levelJsons from "./jsonImports/levelJsons";

// -----------------------------------------------------------------------------

export default ({ enemy }) => {
  console.log("obj", Object.values(levelJsons));

  const levelJsonValues = Object.values(levelJsons);

  // TODO: Move this to only be run once on startup
  // Take the giant level JSONs and only return an array of mobs along with
  // and ID for the biome
  const allEnemyLocations = _map(levelJsonValues, (level) => ({
    mobs: _map(_get(level, "mobs"), (mob) => _get(mob, "mob")),
    id: _get(level, "id"),
  }));

  console.log("uuyuyiop", allEnemyLocations);

  const currentEnemyLocations = [];
  const enemyId = _get(enemy, "enemyJson.id");

  _map(allEnemyLocations, (element, key) => {
    if (_get(element, "mobs").includes(enemyId)) {
      currentEnemyLocations.push(_get(element, "id"));
    }
  });

  console.log(enemyId, "up in here:", currentEnemyLocations);
};
