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

// -----------------------------------------------------------------------------

const mapUserInput = (userInput) => {
  // TODO: ADD ENTRIES TO CONSTANTS FILE FOR EACH TYPE OF JSON.

  // ---------------------------------------------------------------------------
  // Melee Weapons
  // ---------------------------------------------------------------------------
  const meleeWeaponJson = getJson({
    jsonPaths: [
      `weapon${mappedWeapons[userInput]}`,
      `item/Melee${itemMeleeJsons[userInput]}`,
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
      `weapon${mappedWeapons[userInput]}`,
      `item/Ranged${itemRangedJsons[userInput]}`,
    ],
    jsonNames: ["weaponJson", "itemJson"],
    type: "Ranged",
  });

  if (!_isEmpty(_get(rangedWeaponJson, "itemJson"))) {
    return rangedWeaponJson;
  }

  // ---------------------------------------------------------------------------
  // Shields
  // ---------------------------------------------------------------------------
  const shieldJson = getJson({
    jsonPaths: [
      `weapon${mappedWeapons[userInput]}`,
      `item/Shield${itemShieldJsons[userInput]}`,
    ],
    jsonNames: ["weaponJson", "itemJson"],
    type: "Shield",
  });

  if (!_isEmpty(_get(shieldJson, "itemJson"))) {
    return shieldJson;
  }

  // ---------------------------------------------------------------------------
  // Grenades (Skill)
  // ---------------------------------------------------------------------------
  const grenadeJson = getJson({
    jsonPaths: [`item/Grenade${itemGrenadeJsons[userInput]}`],
    jsonNames: ["itemJson"],
    type: "Grenade",
  });

  if (!_isEmpty(_get(grenadeJson, "itemJson"))) {
    return grenadeJson;
  }

  // ---------------------------------------------------------------------------
  // Enemies
  // ---------------------------------------------------------------------------
  const enemyJson = getJson({
    jsonPaths: [`mob/General${enemyJsons[userInput]}`],
    jsonNames: ["enemyJson"],
    type: "Enemies",
  });

  if (!_isEmpty(enemyJson)) {
    return enemyJson;
  }

  // If we didn't find anything, just be pathetic and return undefined
  // TODO: Make an "OOPSIE WHOOPSIE" page to tell the user they donked up
  return undefined;
};

export default mapUserInput;
