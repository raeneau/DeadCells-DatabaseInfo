import _isEmpty from "lodash.isempty";
import _map from "lodash.map";
import _get from "lodash.get";

// Constants
import { BETA } from "../../constants/databaseVersion";
import { levelJsons as levelJsonKeys } from "../jsonImports";

// -----------------------------------------------------------------------------

// jsonPaths: [`level${levelJsons[INTERNAL_ID]}`],
// jsonNames: ["itemJson"],
// databaseVersion,

const loadBiomeData = () => {
  const databaseType = "stable";

  const levelJsons = {};
  _map(levelJsonKeys, (jsonPath, key) => {
    let currentJson = {};

    try {
      // Normally DON'T do this, but the path names might change between updates...
      // If they do, all the items' JSON names would be a nightmare to update
      // eslint-disable-next-line import/no-dynamic-require, global-require
      currentJson = require(`../../database/${databaseType}/level${jsonPath}`);
      levelJsons[key] = currentJson;
    } catch (e) {
      currentJson = undefined;
    }
  });

  // We didn't find any JSON, ight imma head out
  if (_isEmpty(levelJsons)) {
    return undefined;
  }

  return levelJsons;
};

export default loadBiomeData;
