// Local modules.
import getJson from "./getJson";
import swapDatabaseVersion from "./swapDatabaseVersions";

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
const mapUserInput = ({ userInput, databaseVersion }) => {
  const { TYPE, INTERNAL_ID } = userInput;

  const versionedDatabase = swapDatabaseVersion({ databaseVersion });

  const {
    weaponJsons,
    itemMeleeJsons,
    itemRangedJsons,
    itemShieldJsons,
    enemyJsons,
    itemGrenadeJsons,
    itemTrapJsons,
  } = versionedDatabase;

  switch (TYPE) {
    // -------------------------------------------------------------------------
    // Melee Weapons
    // -------------------------------------------------------------------------
    case MELEE_WEAPON: {
      if (weaponJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }
      return getJson({
        jsonPaths: [
          `weapon${weaponJsons[INTERNAL_ID]}`,
          `item/Melee${itemMeleeJsons[INTERNAL_ID]}`,
        ],
        jsonNames: ["weaponJson", "itemJson"],
        type: "Melee",
        databaseVersion,
      });
    }

    // -------------------------------------------------------------------------
    // Ranged Weapons
    // -------------------------------------------------------------------------
    case RANGED_WEAPON: {
      if (weaponJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }
      return getJson({
        jsonPaths: [
          `weapon${weaponJsons[INTERNAL_ID]}`,
          `item/Ranged${itemRangedJsons[INTERNAL_ID]}`,
        ],
        jsonNames: ["weaponJson", "itemJson"],
        type: "Ranged",
        databaseVersion,
      });
    }

    // -------------------------------------------------------------------------
    // Shields
    // -------------------------------------------------------------------------
    case SHIELD: {
      if (weaponJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }
      return getJson({
        jsonPaths: [
          `weapon${weaponJsons[INTERNAL_ID]}`,
          `item/Shield${itemShieldJsons[INTERNAL_ID]}`,
        ],
        jsonNames: ["weaponJson", "itemJson"],
        type: "Shield",
        databaseVersion,
      });
    }

    // -------------------------------------------------------------------------
    // Enemies
    // -------------------------------------------------------------------------
    case ENEMY: {
      if (enemyJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }
      return getJson({
        jsonPaths: [`mob/General${enemyJsons[INTERNAL_ID]}`],
        jsonNames: ["enemyJson"],
        type: "Enemies",
        databaseVersion,
      });
    }

    // -------------------------------------------------------------------------
    // Grenades (Skill)
    // -------------------------------------------------------------------------
    case GRENADE: {
      if (itemGrenadeJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }
      return getJson({
        jsonPaths: [`item/Grenade${itemGrenadeJsons[INTERNAL_ID]}`],
        jsonNames: ["itemJson"],
        type: "Grenade",
        databaseVersion,
      });
    }

    // -------------------------------------------------------------------------
    // Traps (Skill)
    // -------------------------------------------------------------------------
    case TRAP: {
      if (itemTrapJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }
      return getJson({
        jsonPaths: [`item/DeployedTrap${itemTrapJsons[INTERNAL_ID]}`],
        jsonNames: ["itemJson"],
        type: "Trap",
        databaseVersion,
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
