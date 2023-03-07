import formatJsonImport from "./formatJsonImport";

// Jsons that need to be grouped together
import Always from "../database/beta/blueprintDrop/0---Always.json";
import Common from "../database/beta/blueprintDrop/1---Common.json";
import Uncommon from "../database/beta/blueprintDrop/2---Uncommon.json";
import Rare from "../database/beta/blueprintDrop/3---Rare.json";
import Legendary from "../database/beta/blueprintDrop/4---Legendary.json";

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Blueprint Drops
// -----------------------------------------------------------------------------
export const blueprintDropJsons = { Always, Common, Uncommon, Rare, Legendary };

// -----------------------------------------------------------------------------
// Biomes / Levels
// -----------------------------------------------------------------------------
export const levelJsons = formatJsonImport(
  require.context("../database/beta/level/MainLevels", true, /\.json$/).keys(),
);

// -----------------------------------------------------------------------------
// Enemies
// -----------------------------------------------------------------------------
export const enemyJsons = formatJsonImport(
  require.context("../database/beta/mob/General", true, /\.json$/).keys(),
);

// -----------------------------------------------------------------------------
// Gear (Weapons, Traps, Powers, etc)
// -----------------------------------------------------------------------------

// Weapon (same spot for every weapon type)
export const weaponJsons = formatJsonImport(
  require.context("../database/beta/weapon", true, /\.json$/).keys(),
);

// Melee
export const itemMeleeJsons = formatJsonImport(
  require.context("../database/beta/item/Melee", true, /\.json$/).keys(),
);

// Ranged
export const itemRangedJsons = formatJsonImport(
  require.context("../database/beta/item/Ranged", true, /\.json$/).keys(),
);

// Shield
export const itemShieldJsons = formatJsonImport(
  require.context("../database/beta/item/Shield", true, /\.json$/).keys(),
);

// Grenades
export const itemGrenadeJsons = formatJsonImport(
  require.context("../database/beta/item/Grenade", true, /\.json$/).keys(),
);

// Traps
export const itemTrapJsons = formatJsonImport(
  require.context("../database/beta/item/DeployedTrap", true, /\.json$/).keys(),
);

// Powers
export const itemPowerJsons = formatJsonImport(
  require.context("../database/beta/item/Power", true, /\.json$/).keys(),
);
