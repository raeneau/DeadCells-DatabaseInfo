import formatJsonImport from "./formatJsonImport";

// Jsons that need to be grouped together
import Always from "../database/update19-july21/blueprintDrop/0---Always.json";
import Common from "../database/update19-july21/blueprintDrop/1---Common.json";
import Uncommon from "../database/update19-july21/blueprintDrop/2---Uncommon.json";
import Rare from "../database/update19-july21/blueprintDrop/3---Rare.json";
import Legendary from "../database/update19-july21/blueprintDrop/4---Legendary.json";

import PrisonStart from "../database/update19-july21/level/MainLevels/00---PrisonStart.json";
import PrisonCourtyard from "../database/update19-july21/level/MainLevels/01---PrisonCourtyard.json";
import SewerShort from "../database/update19-july21/level/MainLevels/02---SewerShort.json";
import PrisonDepths from "../database/update19-july21/level/MainLevels/03---PrisonDepths.json";
import PrisonCorrupt from "../database/update19-july21/level/MainLevels/04---PrisonCorrupt.json";
import PrisonRoof from "../database/update19-july21/level/MainLevels/05---PrisonRoof.json";
import Ossuary from "../database/update19-july21/level/MainLevels/06---Ossuary.json";
import SewerDepths from "../database/update19-july21/level/MainLevels/07---SewerDepths.json";
import StiltVillage from "../database/update19-july21/level/MainLevels/10---StiltVillage.json";
import AncientTemple from "../database/update19-july21/level/MainLevels/11---AncientTemple.json";
import Cemetery from "../database/update19-july21/level/MainLevels/12---Cemetery.json";
import ClockTower from "../database/update19-july21/level/MainLevels/13---ClockTower.json";
import Crypt from "../database/update19-july21/level/MainLevels/14---Crypt.json";
import Cavern from "../database/update19-july21/level/MainLevels/16---Cavern.json";
import Castle from "../database/update19-july21/level/MainLevels/18---Castle.json";
import Astrolab from "../database/update19-july21/level/MainLevels/20---Astrolab.json";
import Greenhouse from "../database/update19-july21/level/MainLevels/24---Greenhouse.json";
import Swamp from "../database/update19-july21/level/MainLevels/25---Swamp.json";

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
  Astrolab,
  Greenhouse,
  Swamp,
};

// -----------------------------------------------------------------------------
// Enemies
// -----------------------------------------------------------------------------
export const enemyJsons = formatJsonImport(
  require
    .context("../database/update19-july21/mob/General", true, /\.json$/)
    .keys(),
);

// -----------------------------------------------------------------------------
// Gear (Weapons, Traps, Powers, etc)
// -----------------------------------------------------------------------------

// Weapon (same spot for every weapon type)
export const weaponJsons = formatJsonImport(
  require.context("../database/update19-july21/weapon", true, /\.json$/).keys(),
);

// Melee
export const itemMeleeJsons = formatJsonImport(
  require
    .context("../database/update19-july21/item/Melee", true, /\.json$/)
    .keys(),
);

// Ranged
export const itemRangedJsons = formatJsonImport(
  require
    .context("../database/update19-july21/item/Ranged", true, /\.json$/)
    .keys(),
);

// Shield
export const itemShieldJsons = formatJsonImport(
  require
    .context("../database/update19-july21/item/Shield", true, /\.json$/)
    .keys(),
);

// Grenades
export const itemGrenadeJsons = formatJsonImport(
  require
    .context("../database/update19-july21/item/Grenade", true, /\.json$/)
    .keys(),
);

// Traps
export const itemTrapJsons = formatJsonImport(
  require
    .context("../database/update19-july21/item/DeployedTrap", true, /\.json$/)
    .keys(),
);
