import _get from "lodash.get";

import rangedWeaponNames from "../constants/names/rangedWeaponNames";

// -----------------------------------------------------------------------------

const {
  BOOMERANG,
  BOYS_AXE,
  FIRE_BLAST,
  LIGHTNING_BOLT,
  NERVES_OF_STEEL,
  QUICK_BOW,
  REPEATER_CROSSBOW,
  SONIC_CROSSBOW,
} = rangedWeaponNames;

// -----------------------------------------------------------------------------

export const calculateDpsSingleHit = ({ strikeChainArray }) => {};

export const calculateDpsCombo = ({ strikeChainArray }) => {
  // If crit is not allowed on even a single attack, don't show crit DPS damage
  let critAllowed = true;

  const dpsObject = strikeChainArray.reduce(
    (accumulator, element) => {
      const charge = _get(element, "charge", 0);
      const lockCtrlAfter = _get(element, "lockCtrlAfter", 0);
      const power = _get(element, "power[0]");
      const critMult = _get(element, "critMul", 1);
      const canCrit = _get(element, "canCrit");

      if (!canCrit) {
        critAllowed = false;
      }

      return {
        attackDamage: accumulator.attackDamage + power,
        attackDuration: accumulator.attackDuration + (charge + lockCtrlAfter),
        // TODO: Make the CRIT MULTIPLIER (2) a CONSTANT in case devs change it?
        attackCritDamage: accumulator.attackCritDamage + power * 2 * critMult,
      };
    },
    {
      attackDamage: 0,
      attackDuration: 0,
      attackCritDamage: 0,
    },
  );

  return {
    dps: Math.round(dpsObject.attackDamage / dpsObject.attackDuration),
    critDps: critAllowed
      ? Math.round(dpsObject.attackCritDamage / dpsObject.attackDuration)
      : "",
  };
};

// WTF??? HEWWO??? GATLINK??? YOUKOOL??? PLS SAVE ME???
export const calculateDpsBoomerang = ({ strikeChainArray, itemJsonProps }) => {
  const strikeChainElement = strikeChainArray[0];

  const charge = _get(strikeChainElement, "charge", 0);
  const cooldown = _get(strikeChainElement, "coolDown", 0);
  const power = _get(strikeChainElement, "power[0]");
  const tick = _get(itemJsonProps, "tick");
  const count = _get(itemJsonProps, "count");

  return {
    dps: Math.round(
      (power / (tick * 10)) * (charge + cooldown + tick * count + 5),
    ),
    critDps: "", // No crit for boomerang
  };
};

export const calculateDpsSonicCarbine = ({
  strikeChainArray,
  itemJsonProps,
}) => {
  const strikeChainElement = strikeChainArray[0];

  const charge = _get(strikeChainElement, "charge", 0);
  const power = _get(strikeChainElement, "power[0]");
  const tick = _get(strikeChainElement, "props.tick");
  const ammo = _get(itemJsonProps, "ammo");

  const vanillaDps = (power * ammo) / (charge + tick * (ammo - 1));

  return {
    dps: Math.round(vanillaDps),
    critDps: Math.round(vanillaDps * 2),
  };
};

export const calculateDpsQuickBow = ({ strikeChainArray }) => {
  const strikeChainElement = strikeChainArray[0];

  const power = _get(strikeChainElement, "power[0]");
  const tick = _get(strikeChainElement, "props.tick");
  const critMult = _get(strikeChainArray, "critMul");

  const vanillaDps = power / tick;

  return {
    dps: Math.round(vanillaDps),
    critDps: "", //Math.round(vanillaDps * 2 * critMult),
  };
};

export const calculateDpsRepeater = ({ strikeChainArray }) => {};

export const calculateDpsLightning = ({ strikeChainArray }) => {};

export const calculateDpsNerves = ({ strikeChainArray }) => {};

export const calculateDpsBoysAxe = ({ strikeChainArray }) => {};

export const calculateDpsFireBlast = ({ strikeChainArray }) => {};

export const calculateDps = ({
  internalWeaponId,
  strikeChainArray,
  itemJsonProps,
}) => {
  switch (internalWeaponId) {
    case BOOMERANG.INTERNAL_ID:
      return calculateDpsBoomerang({ strikeChainArray, itemJsonProps });

    // case BOYS_AXE.INTERNAL_ID:
    //   return calculateDpsBoysAxe({ strikeChainArray, itemJsonProps });

    // case FIRE_BLAST.INTERNAL_ID:
    //   return calculateDpsFireBlast({ strikeChainArray, itemJsonProps });

    // case LIGHTNING_BOLT.INTERNAL_ID:
    //   return calculateDpsLightning({ strikeChainArray, itemJsonProps });

    // case NERVES_OF_STEEL.INTERNAL_ID:
    //   return calculateDpsNerves({ strikeChainArray, itemJsonProps });

    case QUICK_BOW.INTERNAL_ID:
      return calculateDpsQuickBow({ strikeChainArray, itemJsonProps });

    // case REPEATER_CROSSBOW.INTERNAL_ID:
    //   return calculateDpsRepeater({ strikeChainArray, itemJsonProps });

    case SONIC_CROSSBOW.INTERNAL_ID:
      return calculateDpsSonicCarbine({ strikeChainArray, itemJsonProps });

    default:
      return calculateDpsCombo({ strikeChainArray });
  }
};

//------------------------------------------------------------------------------

export default calculateDps;
