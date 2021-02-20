import formatJsonImport from "./formatJsonImport";

// Jsons that need to be grouped together
import Always from "../database/beta/blueprintDrop/0---Always.json";
import Common from "../database/beta/blueprintDrop/1---Common.json";
import Uncommon from "../database/beta/blueprintDrop/2---Uncommon.json";
import Rare from "../database/beta/blueprintDrop/3---Rare.json";
import Legendary from "../database/beta/blueprintDrop/4---Legendary.json";

import PrisonStart from "../database/beta/level/MainLevels/00---PrisonStart.json";
import PrisonCourtyard from "../database/beta/level/MainLevels/01---PrisonCourtyard.json";
import SewerShort from "../database/beta/level/MainLevels/02---SewerShort.json";
import PrisonDepths from "../database/beta/level/MainLevels/03---PrisonDepths.json";
import PrisonCorrupt from "../database/beta/level/MainLevels/04---PrisonCorrupt.json";
import PrisonRoof from "../database/beta/level/MainLevels/05---PrisonRoof.json";
import Ossuary from "../database/beta/level/MainLevels/06---Ossuary.json";
import SewerDepths from "../database/beta/level/MainLevels/07---SewerDepths.json";
import StiltVillage from "../database/beta/level/MainLevels/10---StiltVillage.json";
import AncientTemple from "../database/beta/level/MainLevels/11---AncientTemple.json";
import Cemetery from "../database/beta/level/MainLevels/12---Cemetery.json";
import ClockTower from "../database/beta/level/MainLevels/13---ClockTower.json";
import Crypt from "../database/beta/level/MainLevels/14---Crypt.json";
import Cavern from "../database/beta/level/MainLevels/16---Cavern.json";
import Castle from "../database/beta/level/MainLevels/18---Castle.json";
import Distillery from "../database/beta/level/MainLevels/19---Distillery.json";
import Astrolab from "../database/beta/level/MainLevels/21---Astrolab.json";
import Greenhouse from "../database/beta/level/MainLevels/25---Greenhouse.json";
import Swamp from "../database/beta/level/MainLevels/26---Swamp.json";

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Blueprint Drops
// -----------------------------------------------------------------------------
export const blueprintDropJsons = { Always, Common, Uncommon, Rare, Legendary };

// -----------------------------------------------------------------------------
// Biomes / Levels
// -----------------------------------------------------------------------------
export const levelJsons = {
  PrisonStart,
  PrisonCourtyard,
  SewerShort,
  PrisonDepths,
  PrisonCorrupt,
  PrisonRoof,
  Ossuary,
  SewerDepths,
  StiltVillage,
  AncientTemple,
  Cemetery,
  ClockTower,
  Crypt,
  Cavern,
  Castle,
  Distillery,
  Astrolab,
  Greenhouse,
  Swamp,
};

export const levelJsonPath = formatJsonImport(
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
