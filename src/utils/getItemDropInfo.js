import _isEmpty from "lodash.isempty";
import _get from "lodash.get";
import _filter from "lodash.filter";
import _map from "lodash.map";

// Local modules.
import { enemyJsons } from "./jsonImports";
import getJson from "./getJson";
import getDropChance from "./getDropChance";

// Constants.
import { STABLE } from "../constants/databaseVersion";

// -----------------------------------------------------------------------------

export default ({ databaseVersion = STABLE, internalId }) =>
  // Take all the enemy JSONs, which contain blueprint info, and map them
  // to use the internal weapon name as the key.
  // Also, remove any entries that are undefined.
  _filter(
    _map(enemyJsons, (enemyJsonName, enemyName) => {
      const enemyJsonParsed =
        // TODO: This is gross. Fix it and save the enemy list on load, so we dont have to check again
        getJson({
          jsonPaths: [`mob/Flying${enemyJsonName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Melee${enemyJsonName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Support${enemyJsonName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Ranged${enemyJsonName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/MiniBoss${enemyJsonName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Boss${enemyJsonName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        });

      const blueprintInfo = _filter(
        _get(enemyJsonParsed, "enemyJson.blueprints", []),
        (droppedBlueprint) =>
          String(droppedBlueprint.item).toUpperCase() === internalId,
      );

      if (!_isEmpty(blueprintInfo))
        return {
          enemyName,
          dropChance: getDropChance({ rarity: blueprintInfo[0].rarity }),
          bcRequirement: _get(blueprintInfo[0], "minDifficulty"),
        };
      return undefined;
    }),
    (element) => element !== undefined,
  );
