import _get from "lodash.get";

import { blueprintDropJsons } from "./jsonImports";

// -----------------------------------------------------------------------------

const getDropChance = ({ rarity }) => {
  const dropChance = _get(blueprintDropJsons, `${rarity}.chance`) * 100;

  return Number.isNaN(dropChance)
    ? "Special Drop"
    : `${dropChance.toFixed(2).replace(/\.0+$/, "")}%`;
};

// -----------------------------------------------------------------------------

export default getDropChance;
