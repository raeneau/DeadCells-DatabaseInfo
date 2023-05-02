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
  POWER,
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
    itemPowerJsons,
    levelJsons,
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

      const enemyName = enemyJsons[INTERNAL_ID];

      // TODO: This is gross. Fix it and save the enemy list on load, so we dont have to check again
      return (
        getJson({
          jsonPaths: [`mob/Flying${enemyName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Melee${enemyName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Support${enemyName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Ranged${enemyName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/MiniBoss${enemyName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        }) ||
        getJson({
          jsonPaths: [`mob/Boss${enemyName}`],
          jsonNames: ["enemyJson"],
          databaseVersion,
        })
      );
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
    // Powers (Skill)
    // -------------------------------------------------------------------------
    case POWER: {
      if (itemPowerJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }

      return getJson({
        jsonPaths: [`item/Power${itemPowerJsons[INTERNAL_ID]}`],
        jsonNames: ["itemJson"],
        databaseVersion,
      });
    }

    // -------------------------------------------------------------------------
    // Levels
    // -------------------------------------------------------------------------
    case LEVEL: {
      if (levelJsons[INTERNAL_ID] === undefined) {
        return undefined;
      }

      return getJson({
        jsonPaths: [`level${levelJsons[INTERNAL_ID]}`],
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
