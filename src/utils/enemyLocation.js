import _get from "lodash.get";
import _map from "lodash.map";
import _uniq from "lodash.uniq";

import levelJsons from "./jsonImports/levelJsons";

// -----------------------------------------------------------------------------

const allEnemyLocations = {};

export default ({ enemy }) => {
  // TODO: Move this to only be run once on startup
  for (var element in levelJsons) {
    const level = _get(levelJsons, `[${element}].mobs`);
    // Turn current "level" element into an array of enemy names.
    const levelMobs = _map(level, (entry) => entry.mob);

    // We only really want unique mobs
    allEnemyLocations[element] = _uniq(levelMobs);
  }

  let currentEnemyLocations = [];

  _map(allEnemyLocations, (element, key) => {
    if (element.includes(enemy)) {
      currentEnemyLocations.push(key);
    }
  });

  console.log(enemy, "up in here:", currentEnemyLocations);
};
