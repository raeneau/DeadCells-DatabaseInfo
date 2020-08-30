import _isEmpty from "lodash.isempty";
import _map from "lodash.map";

// Constants
import { BETA } from "../constants/databaseVersion";

// -----------------------------------------------------------------------------

const getJson = ({ jsonPaths, jsonNames, type, databaseVersion }) => {
  const returnedJsons = {};

  const databaseType = databaseVersion === BETA ? "beta" : "stable";

  _map(jsonPaths, (jsonPath, index) => {
    let currentJson = {};

    try {
      // Normally DON'T do this, but the path names might change between updates...
      // If they do, all the items' JSON names would be a nightmare to update
      // eslint-disable-next-line import/no-dynamic-require, global-require
      currentJson = require(`../database/${databaseType}/${jsonPath}`);
      returnedJsons[jsonNames[index]] = currentJson;
    } catch (e) {
      currentJson = undefined;
    }
  });

  // We didn't find any JSON, ight imma head out
  if (_isEmpty(returnedJsons)) {
    return undefined;
  }

  return {
    ...returnedJsons,
    type,
  };
};

export default getJson;
