// Local formatted JSON references.
import mappedWeapons from "./jsonImports/weaponJsons";
import itemMeleeJsons from "./jsonImports/itemMeleeJsons";
import itemRangedJsons from "./jsonImports/itemRangedJsons";
import itemShieldJsons from "./jsonImports/itemShieldJsons";
import enemyJsons from "./jsonImports/enemyJsons";
import itemGrenadeJsons from "./jsonImports/itemGrenadeJsons";
import itemTrapJsons from "./jsonImports/itemTrapJsons";

// Local modules.
import getJson from "./getJson";

// Constants.
import inputTypes from "../constants/inputTypes";

// -----------------------------------------------------------------------------

// Extract constants.
const {
  MELEE_WEAPON,
  RANGED_WEAPON,
  SHIELD,
  ENEMY,
  GRENADE,
  TRAP,
} = inputTypes;

// -----------------------------------------------------------------------------
const mapUserInput = (userInput) => {
  const { TYPE, INTERNAL_ID } = userInput;

  switch (TYPE) {
    // -------------------------------------------------------------------------
    // Melee Weapons
    // -------------------------------------------------------------------------
    case MELEE_WEAPON: {
      return getJson({
        jsonPaths: [
          `weapon${mappedWeapons[INTERNAL_ID]}`,
          `item/Melee${itemMeleeJsons[INTERNAL_ID]}`,
        ],
        jsonNames: ["weaponJson", "itemJson"],
        type: "Melee",
      });
    }

    // -------------------------------------------------------------------------
    // Ranged Weapons
    // -------------------------------------------------------------------------
    case RANGED_WEAPON: {
      return getJson({
        jsonPaths: [
          `weapon${mappedWeapons[INTERNAL_ID]}`,
          `item/Ranged${itemRangedJsons[INTERNAL_ID]}`,
        ],
        jsonNames: ["weaponJson", "itemJson"],
        type: "Ranged",
      });
    }

    // -------------------------------------------------------------------------
    // Shields
    // -------------------------------------------------------------------------
    case SHIELD: {
      return getJson({
        jsonPaths: [
          `weapon${mappedWeapons[INTERNAL_ID]}`,
          `item/Shield${itemShieldJsons[INTERNAL_ID]}`,
        ],
        jsonNames: ["weaponJson", "itemJson"],
        type: "Shield",
      });
    }

    // -------------------------------------------------------------------------
    // Enemies
    // -------------------------------------------------------------------------
    case ENEMY: {
      return getJson({
        jsonPaths: [`mob/General${enemyJsons[INTERNAL_ID]}`],
        jsonNames: ["enemyJson"],
        type: "Enemies",
      });
    }

    // -------------------------------------------------------------------------
    // Grenades (Skill)
    // -------------------------------------------------------------------------
    case GRENADE: {
      return getJson({
        jsonPaths: [`item/Grenade${itemGrenadeJsons[INTERNAL_ID]}`],
        jsonNames: ["itemJson"],
        type: "Grenade",
      });
    }

    // -------------------------------------------------------------------------
    // Traps (Skill)
    // -------------------------------------------------------------------------
    case TRAP: {
      return getJson({
        jsonPaths: [`item/DeployedTrap${itemTrapJsons[INTERNAL_ID]}`],
        jsonNames: ["itemJson"],
        type: "Trap",
      });
    }

    // -------------------------------------------------------------------------
    // DEFAULT RETURN - Nothing matching the type was found
    // -------------------------------------------------------------------------
    default: {
      return undefined;
    }
  }
};

export default mapUserInput;
