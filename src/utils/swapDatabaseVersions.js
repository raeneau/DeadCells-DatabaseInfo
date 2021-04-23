// Local formatted JSON references.
import {
  weaponJsons as weaponJsonsStable,
  itemMeleeJsons as itemMeleeJsonsStable,
  itemRangedJsons as itemRangedJsonsStable,
  itemShieldJsons as itemShieldJsonsStable,
  enemyJsons as enemyJsonsStable,
  itemGrenadeJsons as itemGrenadeJsonsStable,
  itemTrapJsons as itemTrapJsonsStable,
  itemPowerJsons as itemPowerJsonsStable,
  levelJsons as levelJsonsStable,
  levelJsonPath as levelJsonPathStable,
} from "./jsonImports";

import {
  weaponJsons as weaponJsonsBeta,
  itemMeleeJsons as itemMeleeJsonsBeta,
  itemRangedJsons as itemRangedJsonsBeta,
  itemShieldJsons as itemShieldJsonsBeta,
  enemyJsons as enemyJsonsBeta,
  itemGrenadeJsons as itemGrenadeJsonsBeta,
  itemTrapJsons as itemTrapJsonsBeta,
  itemPowerJsons as itemPowerJsonsBeta,
  levelJsons as levelJsonsBeta,
  levelJsonPath as levelJsonPathBeta,
} from "./jsonImportsBeta";

// Constants.
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
      itemPowerJsons: itemPowerJsonsBeta,
      levelJsons: levelJsonsBeta,
      levelJsonPath: levelJsonPathBeta,
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
    itemPowerJsons: itemPowerJsonsStable,
    levelJsons: levelJsonsStable,
    levelJsonPath: levelJsonPathStable,
  };
};

// -----------------------------------------------------------------------------

export default swapDatabaseVersions;
