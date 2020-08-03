// Local formatted JSON references.
import {
  weaponJsons as weaponJsonsStable,
  itemMeleeJsons as itemMeleeJsonsStable,
  itemRangedJsons as itemRangedJsonsStable,
  itemShieldJsons as itemShieldJsonsStable,
  enemyJsons as enemyJsonsStable,
  itemGrenadeJsons as itemGrenadeJsonsStable,
  itemTrapJsons as itemTrapJsonsStable,
} from "./jsonImports";

import {
  weaponJsons as weaponJsonsBeta,
  itemMeleeJsons as itemMeleeJsonsBeta,
  itemRangedJsons as itemRangedJsonsBeta,
  itemShieldJsons as itemShieldJsonsBeta,
  enemyJsons as enemyJsonsBeta,
  itemGrenadeJsons as itemGrenadeJsonsBeta,
  itemTrapJsons as itemTrapJsonsBeta,
} from "./jsonImportsBeta";

// Local modules.
import getJson from "./getJson";

// Constants.
import inputTypes from "../constants/inputTypes";
import { BETA, STABLE } from "../constants/databaseVersion";

// -----------------------------------------------------------------------------

const swapDatabaseVersions = ({ databaseVersion = STABLE }) => {
  if (databaseVersion === BETA) {
    return {
      weaponJsons: weaponJsonsBeta,
      itemMeleeJsons: itemMeleeJsonsBeta,
      itemRangedJsons: itemRangedJsonsBeta,
      itemShieldJsons: itemShieldJsonsBeta,
      enemyJsons: enemyJsonsBeta,
      itemGrenadeJsons: itemGrenadeJsonsBeta,
      itemTrapJsons: itemTrapJsonsBeta,
    };
  }
  return {
    weaponJsons: weaponJsonsStable,
    itemMeleeJsons: itemMeleeJsonsStable,
    itemRangedJsons: itemRangedJsonsStable,
    itemShieldJsons: itemShieldJsonsStable,
    enemyJsons: enemyJsonsStable,
    itemGrenadeJsons: itemGrenadeJsonsStable,
    itemTrapJsons: itemTrapJsonsStable,
  };
};

// -----------------------------------------------------------------------------

export default swapDatabaseVersions;
