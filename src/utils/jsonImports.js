import formatJsonImport from "./formatJsonImport";

// Jsons that need to be grouped together
import Always from "../database/stable/blueprintDrop/0---Always.json";
import Common from "../database/stable/blueprintDrop/1---Common.json";
import Uncommon from "../database/stable/blueprintDrop/2---Uncommon.json";
import Rare from "../database/stable/blueprintDrop/3---Rare.json";
import Legendary from "../database/stable/blueprintDrop/4---Legendary.json";

import PrisonStart from "../database/stable/level/MainLevels/00---PrisonStart.json";
import PrisonCourtyard from "../database/stable/level/MainLevels/01---PrisonCourtyard.json";
import SewerShort from "../database/stable/level/MainLevels/02---SewerShort.json";
import PrisonDepths from "../database/stable/level/MainLevels/03---PrisonDepths.json";
import PrisonCorrupt from "../database/stable/level/MainLevels/04---PrisonCorrupt.json";
import PrisonRoof from "../database/stable/level/MainLevels/05---PrisonRoof.json";
import Ossuary from "../database/stable/level/MainLevels/06---Ossuary.json";
import SewerDepths from "../database/stable/level/MainLevels/07---SewerDepths.json";
import StiltVillage from "../database/stable/level/MainLevels/10---StiltVillage.json";
import AncientTemple from "../database/stable/level/MainLevels/11---AncientTemple.json";
import Cemetery from "../database/stable/level/MainLevels/12---Cemetery.json";
import ClockTower from "../database/stable/level/MainLevels/13---ClockTower.json";
import Crypt from "../database/stable/level/MainLevels/14---Crypt.json";
import Cavern from "../database/stable/level/MainLevels/16---Cavern.json";
import Castle from "../database/stable/level/MainLevels/18---Castle.json";
import Distillery from "../database/stable/level/MainLevels/19---Distillery.json";
import Astrolab from "../database/stable/level/MainLevels/21---Astrolab.json";
import Greenhouse from "../database/stable/level/MainLevels/25---Greenhouse.json";
import Swamp from "../database/stable/level/MainLevels/26---Swamp.json";
import Tumulus from "../database/stable/level/MainLevels/28---Tumulus.json";
import Cliff from "../database/stable/level/MainLevels/29---Cliff.json";

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Blueprint Drops
// -----------------------------------------------------------------------------
export const blueprintDropJsons = { Always, Common, Uncommon, Rare, Legendary };

// -----------------------------------------------------------------------------
// Biomes / Levels
// -----------------------------------------------------------------------------
export const getLevelJsons = {
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
  Tumulus,
  Cliff,
};

export const getLevelJsonPath = (databaseVersion) =>
  formatJsonImport(
    require
      .context("../database/stable/level/MainLevels", true, /\.json$/)
      .keys(),
  );

// -----------------------------------------------------------------------------
// Enemies
// -----------------------------------------------------------------------------
export const getEnemyJsons = (databaseVersion) =>
  formatJsonImport(
    require.context("../database/stable/mob/General", true, /\.json$/).keys(),
  );

// -----------------------------------------------------------------------------
// Gear (Weapons, Traps, Powers, etc)
// -----------------------------------------------------------------------------

// Weapon (same spot for every weapon type)
export const getWeaponJsons = (databaseVersion) =>
  formatJsonImport(
    require.context("../database/stable/weapon", true, /\.json$/).keys(),
  );

// Melee
export const getItemMeleeJsons = (databaseVersion) =>
  formatJsonImport(
    require.context(`../database/stable/item/Melee`, true, /\.json$/).keys(),
  );

// Ranged
export const getItemRangedJsons = (databaseVersion) =>
  formatJsonImport(
    require.context("../database/stable/item/Ranged", true, /\.json$/).keys(),
  );

// Shield
export const getItemShieldJsons = (databaseVersion) =>
  formatJsonImport(
    require.context("../database/stable/item/Shield", true, /\.json$/).keys(),
  );

// Grenades
export const getItemGrenadeJsons = (databaseVersion) =>
  formatJsonImport(
    require.context("../database/stable/item/Grenade", true, /\.json$/).keys(),
  );

// Traps
export const getItemTrapJsons = (databaseVersion) =>
  formatJsonImport(
    require
      .context("../database/stable/item/DeployedTrap", true, /\.json$/)
      .keys(),
  );

// Powers
export const getItemPowerJsons = (databaseVersion) =>
  formatJsonImport(
    require.context("../database/stable/item/Power", true, /\.json$/).keys(),
  );
