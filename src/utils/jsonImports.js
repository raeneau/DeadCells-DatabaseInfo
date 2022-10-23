import formatJsonImport from "./formatJsonImport";

// Jsons that need to be grouped together
import Always from "../database/stable/blueprintDrop/0---Always.json";
import Common from "../database/stable/blueprintDrop/1---Common.json";
import Uncommon from "../database/stable/blueprintDrop/2---Uncommon.json";
import Rare from "../database/stable/blueprintDrop/3---Rare.json";
import Legendary from "../database/stable/blueprintDrop/4---Legendary.json";

import PrisonStart from "../database/stable/level/MainLevels/000---PrisonStart.json";
import PrisonCourtyard from "../database/stable/level/MainLevels/001---PrisonCourtyard.json";
import SewerShort from "../database/stable/level/MainLevels/002---SewerShort.json";
import PrisonDepths from "../database/stable/level/MainLevels/003---PrisonDepths.json";
import PrisonCorrupt from "../database/stable/level/MainLevels/004---PrisonCorrupt.json";
import PrisonRoof from "../database/stable/level/MainLevels/005---PrisonRoof.json";
import Ossuary from "../database/stable/level/MainLevels/006---Ossuary.json";
import SewerDepths from "../database/stable/level/MainLevels/007---SewerDepths.json";
import StiltVillage from "../database/stable/level/MainLevels/010---StiltVillage.json";
import AncientTemple from "../database/stable/level/MainLevels/011---AncientTemple.json";
import Cemetery from "../database/stable/level/MainLevels/012---Cemetery.json";
import ClockTower from "../database/stable/level/MainLevels/013---ClockTower.json";
import Crypt from "../database/stable/level/MainLevels/014---Crypt.json";
import Cavern from "../database/stable/level/MainLevels/016---Cavern.json";
import Castle from "../database/stable/level/MainLevels/018---Castle.json";
import Distillery from "../database/stable/level/MainLevels/019---Distillery.json";
import Astrolab from "../database/stable/level/MainLevels/021---Astrolab.json";
import Greenhouse from "../database/stable/level/MainLevels/025---Greenhouse.json";
import Swamp from "../database/stable/level/MainLevels/026---Swamp.json";
import Tumulus from "../database/stable/level/MainLevels/028---Tumulus.json";
import Cliff from "../database/stable/level/MainLevels/029---Cliff.json";
import Shipwreck from "../database/stable/level/MainLevels/031---Shipwreck.json";

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
  Tumulus,
  Cliff,
  Shipwreck,
};

export const levelJsonPath = formatJsonImport(
  require
    .context("../database/stable/level/MainLevels", true, /\.json$/)
    .keys(),
);

// -----------------------------------------------------------------------------
// Enemies
// -----------------------------------------------------------------------------
export const enemyJsons = formatJsonImport(
  require.context("../database/stable/mob/General", true, /\.json$/).keys(),
);

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
