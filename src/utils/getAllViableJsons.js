import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Local formatted JSON references.
import mappedWeapons from "./jsonImports/weaponJsons";
import itemMeleeJsons from "./jsonImports/itemMeleeJsons";
import itemRangedJsons from "./jsonImports/itemRangedJsons";
import itemShieldJsons from "./jsonImports/itemShieldJsons";
import enemyJsons from "./jsonImports/enemyJsons";
import itemGrenadeJsons from "./jsonImports/itemGrenadeJsons";

// Local modules.
import getJson from "./getJson";

// Constants.
import inputTypes from "../constants/inputTypes";

// -----------------------------------------------------------------------------

const mapUserInput = (userInput) => {
  // TODO: ADD ENTRIES TO CONSTANTS FILE FOR EACH TYPE OF JSON.
  const { TYPE, INTERNAL_ID } = userInput;

  // ---------------------------------------------------------------------------
  // Melee Weapons
  // ---------------------------------------------------------------------------
  const meleeWeaponJson = getJson({
    jsonPaths: [
      `weapon${mappedWeapons[INTERNAL_ID]}`,
      `item/Melee${itemMeleeJsons[INTERNAL_ID]}`,
    ],
    jsonNames: ["weaponJson", "itemJson"],
    type: "Melee",
  });

  if (!_isEmpty(_get(meleeWeaponJson, "itemJson"))) {
    return meleeWeaponJson;
  }

  // ---------------------------------------------------------------------------
  // Ranged Weapons
  // ---------------------------------------------------------------------------
  const rangedWeaponJson = getJson({
    jsonPaths: [
      `weapon${mappedWeapons[INTERNAL_ID]}`,
      `item/Ranged${itemRangedJsons[INTERNAL_ID]}`,
    ],
    jsonNames: ["weaponJson", "itemJson"],
    type: "Ranged",
  });

  if (!_isEmpty(_get(rangedWeaponJson, "itemJson"))) {
    return rangedWeaponJson;
  }

  // ---------------------------------------------------------------------------
  // Grenades (Skill)
  // ---------------------------------------------------------------------------
  const grenadeJson = getJson({
    jsonPaths: [`item/Grenade${itemGrenadeJsons[INTERNAL_ID]}`],
    jsonNames: ["itemJson"],
    type: "Grenade",
  });

  if (!_isEmpty(_get(grenadeJson, "itemJson"))) {
    return grenadeJson;
  }

  switch (TYPE) {
    // ---------------------------------------------------------------------------
    // Shields
    // ---------------------------------------------------------------------------
    case inputTypes.SHIELD: {
      return getJson({
        jsonPaths: [
          `weapon${mappedWeapons[INTERNAL_ID]}`,
          `item/Shield${itemShieldJsons[INTERNAL_ID]}`,
        ],
        jsonNames: ["weaponJson", "itemJson"],
        type: "Shield",
      });
    }
    // ---------------------------------------------------------------------------
    // Enemies
    // ---------------------------------------------------------------------------
    case inputTypes.ENEMY: {
      return getJson({
        jsonPaths: [`mob/General${enemyJsons[INTERNAL_ID]}`],
        jsonNames: ["enemyJson"],
        type: "Enemies",
      });
    }
    default: {
      return undefined;
    }
  }
};

export default mapUserInput;
