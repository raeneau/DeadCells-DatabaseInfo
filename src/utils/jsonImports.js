import formatJsonImport from "./formatJsonImport";

// Jsons that need to be grouped together
import Always from "../database/stable/blueprintDrop/0---Always.json";
import Common from "../database/stable/blueprintDrop/1---Common.json";
import Uncommon from "../database/stable/blueprintDrop/2---Uncommon.json";
import Rare from "../database/stable/blueprintDrop/3---Rare.json";
import Legendary from "../database/stable/blueprintDrop/4---Legendary.json";

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Blueprint Drops
// -----------------------------------------------------------------------------
export const blueprintDropJsons = { Always, Common, Uncommon, Rare, Legendary };

// -----------------------------------------------------------------------------
// Biomes / Levels
// -----------------------------------------------------------------------------
export const levelJsons = formatJsonImport(
  require.context("../database/stable/level", true, /\.json$/).keys(),
);

// -----------------------------------------------------------------------------
// Enemies
// -----------------------------------------------------------------------------
export const enemyJsons = {
  // Flying
  ...formatJsonImport(
    require.context("../database/stable/mob/Flying", true, /\.json$/).keys(),
  ),
  // Melee
  ...formatJsonImport(
    require.context("../database/stable/mob/Melee", true, /\.json$/).keys(),
  ),
  // Ranged
  ...formatJsonImport(
    require.context("../database/stable/mob/Ranged", true, /\.json$/).keys(),
  ),
  // Support
  ...formatJsonImport(
    require.context("../database/stable/mob/Support", true, /\.json$/).keys(),
  ),
  // Mini-Boss
  ...formatJsonImport(
    require.context("../database/stable/mob/MiniBoss", true, /\.json$/).keys(),
  ),
  // Boss
  ...formatJsonImport(
    require.context("../database/stable/mob/Boss", true, /\.json$/).keys(),
  ),
};

// -----------------------------------------------------------------------------
// Gear (Weapons, Traps, Powers, etc)
// -----------------------------------------------------------------------------

// Weapon (same spot for every weapon type)
export const weaponJsons = formatJsonImport(
  require.context("../database/stable/weapon", true, /\.json$/).keys(),
);

// Melee
export const itemMeleeJsons = formatJsonImport(
  require.context("../database/stable/item/Melee", true, /\.json$/).keys(),
);

// Ranged
export const itemRangedJsons = formatJsonImport(
  require.context("../database/stable/item/Ranged", true, /\.json$/).keys(),
);

// Shield
export const itemShieldJsons = formatJsonImport(
  require.context("../database/stable/item/Shield", true, /\.json$/).keys(),
);

// Grenades
export const itemGrenadeJsons = formatJsonImport(
  require.context("../database/stable/item/Grenade", true, /\.json$/).keys(),
);

// Traps
export const itemTrapJsons = formatJsonImport(
  require
    .context("../database/stable/item/DeployedTrap", true, /\.json$/)
    .keys(),
);

// Powers
export const itemPowerJsons = formatJsonImport(
  require.context("../database/stable/item/Power", true, /\.json$/).keys(),
);
