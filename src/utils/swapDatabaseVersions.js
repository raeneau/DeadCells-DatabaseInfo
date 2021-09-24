// Local formatted JSON references.
import {
  getWeaponJsons,
  getItemMeleeJsons,
  getItemRangedJsons,
  getItemShieldJsons,
  getEnemyJsons,
  getItemGrenadeJsons,
  getItemTrapJsons,
  getItemPowerJsons,
  getLevelJsons,
  getLevelJsonPath,
} from "./jsonImports";

// Constants.
import { STABLE } from "../constants/databaseVersion";

// -----------------------------------------------------------------------------

const swapDatabaseVersions = ({ databaseVersion = STABLE }) => {
  return {
    weaponJsons: getWeaponJsons(databaseVersion),
    itemMeleeJsons: getItemMeleeJsons(databaseVersion),
    itemRangedJsons: getItemRangedJsons(databaseVersion),
    itemShieldJsons: getItemShieldJsons(databaseVersion),
    enemyJsons: getEnemyJsons(databaseVersion),
    itemGrenadeJsons: getItemGrenadeJsons(databaseVersion),
    itemTrapJsons: getItemTrapJsons(databaseVersion),
    itemPowerJsons: getItemPowerJsons(databaseVersion),
    levelJsons: getLevelJsons(databaseVersion),
    levelJsonPath: getLevelJsonPath(databaseVersion),
  };
};

// -----------------------------------------------------------------------------

export default swapDatabaseVersions;
