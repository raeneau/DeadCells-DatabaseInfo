import _isEmpty from "lodash.isempty";
import _map from "lodash.map";

// -----------------------------------------------------------------------------

const getJson = ({ jsonPaths, jsonNames, type }) => {
  const returnedJsons = {};

  _map(jsonPaths, (jsonPath, index) => {
    let currentJson = {};

    try {
      // Normally DON'T do this, but I'm not sure if path names change...
      // If they do, all the items' JSON names would be a nightmare to update
      // eslint-disable-next-line
      currentJson = require(`../database/update19-july21/${jsonPath}`);
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
