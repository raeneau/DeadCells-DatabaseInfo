import _isEmpty from "lodash.isempty";

import mappedWeapons from "./jsonImports/weaponJsons";

import itemMeleeJsons from "./jsonImports/itemMeleeJsons";
import itemRangedJsons from "./jsonImports/itemRangedJsons";
import itemShieldJsons from "./jsonImports/itemShieldJsons";

import enemyJsons from "./jsonImports/enemyJsons";

// -----------------------------------------------------------------------------

const mapUserInput = (userInput) => {
  const weaponJsonPath = mappedWeapons[userInput];
  const itemMeleeJsonPath = itemMeleeJsons[userInput];
  const itemRangedJsonPath = itemRangedJsons[userInput];
  const itemShieldJsonPath = itemShieldJsons[userInput];

  const enemyJsonPath = enemyJsons[userInput];

  let weaponJson;
  let itemMeleeJson;
  let itemRangedJson;
  let itemShieldJson;

  let enemyJson;

  // TODO: Rip these out to be a separate utility file
  try {
    // Pull the JSON entries from the corresponding section of the DB
    weaponJson = require(`../database/weapon${weaponJsonPath}`);
  } catch (e) {
    weaponJson = undefined;
  }

  // Only look for weapon's item JSONs if the weapon was found
  if (!_isEmpty(weaponJson)) {
    try {
      itemMeleeJson = require(`../database/item/Melee${itemMeleeJsonPath}`);
    } catch (e) {
      itemMeleeJson = undefined;
    }
    try {
      itemRangedJson = require(`../database/item/Ranged${itemRangedJsonPath}`);
    } catch (e) {
      itemRangedJson = undefined;
    }
    try {
      itemShieldJson = require(`../database/item/Shield${itemShieldJsonPath}`);
    } catch (e) {
      itemShieldJson = undefined;
    }
  }

  try {
    enemyJson = require(`../database/item/Shield${enemyJsonPath}`);
  } catch (e) {
    enemyJson = undefined;
  }

  console.log(itemMeleeJson, "...", itemRangedJson, "...", itemShieldJson);

  return {
    itemJson: itemMeleeJson || itemRangedJson || itemShieldJson,
    weaponJson,
  };
};

export default mapUserInput;
