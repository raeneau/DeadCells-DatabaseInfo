import mapUserInputEnemyNames from "./mapUserInputEnemyNames";
import mapUserInputShieldNames from "./mapUserInputShieldNames";
import mapUserInputMeleeNames from "./mapUserInputMeleeNames";
import mapNameConflicts from "./mapNameConflicts";
import mapUserInputRangedNames from "./mapUserInputRangedNames";

/**
 * These files are used for mapping whatever weird user input is entered in the
 * search bar and matching them up with an object of the resource's name,
 * internal ID, and type.
 *
 * This allows tons of entries can be added without compromising the data
 * inside those objects.
 *
 * Example: The user could input "furnace knight", yet the "enforcer"
 * resource would still retrieved. After mapping, the app treats the
 * "furnace knight" input the exact same as an input of "enforcer"
 */
export default {
  ...mapUserInputEnemyNames,
  ...mapUserInputShieldNames,
  ...mapUserInputMeleeNames,
  ...mapUserInputRangedNames,
  ...mapNameConflicts,
};
