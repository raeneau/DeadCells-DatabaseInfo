import _get from "lodash.get";

import { blueprintDropJsons } from "./jsonImports";

// -----------------------------------------------------------------------------

const getDropChance = ({ rarity }) =>
  (_get(blueprintDropJsons, `${rarity}.chance`) * 100)
    .toFixed(2)
    .replace(/\.0+$/, "");

// -----------------------------------------------------------------------------

export default getDropChance;
