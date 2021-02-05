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
  LEVEL,
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
    levelJsonPath,
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
        databaseVersion,
      });
    }

    // -------------------------------------------------------------------------
    // Levels
    // -------------------------------------------------------------------------
    case LEVEL: {
      if (levelJsonPath[INTERNAL_ID] === undefined) {
        return undefined;
      }

      console.log(levelJsonPath[INTERNAL_ID]);
      return getJson({
        jsonPaths: [`level/MainLevels${levelJsonPath[INTERNAL_ID]}`],
        jsonNames: ["itemJson"],
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
