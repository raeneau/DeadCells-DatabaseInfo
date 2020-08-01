import _get from "lodash.get";

// Constants.
import { criticalHitMul } from "../constants/truelleConstants";

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

export const newCalculateDps = ({ strikeChainArray }) => {
  var damageSum = 0;
  var critDamageSum = 0;
  var timeSum = 0;

  strikeChainArray.forEach((strike) => {
    const actualCritMult = criticalHitMul * _get(strike, "critMul", 1);

    let strikePower = strike.power;
    let critStrikePower = strike.power;

    if (strike.canCrit) {
      critStrikePower = strikePower * actualCritMult;
    }

    damageSum += Number(strikePower);
    critDamageSum += Number(critStrikePower);

    if (strikeChainArray.length === 1) {
      timeSum =
        timeSum +
        strike.charge +
        Math.max(strike.lockCtrlAfter, strike.cooldown);
    } else {
      timeSum = timeSum + strike.charge + strike.lockCtrlAfter;
    }

    console.log(damageSum, critDamageSum, timeSum);
  });

  // Let Damages = 0;
  // Let Time = 0;
  // For each strike in weapon.strikeChain:
  //     Let CritMul = CriticalHitMul (in CBD/truelle) * strike.critMul (or 1 if field is empty)
  //     Apply SuperCrit and HeavyCrit multiplier here if weapon hold affixes
  //     Let StrikePower = strike.power;
  //     If strike.canCrit AND  we want crit DPS :
  //         StrikePower = StrikePower * CritMul;
  //     End if
  //     Damages = Damages +  StrikePower;
  //     If weapon has only one strike
  //         Time = Time + strike.charge + Max(strike.lockCtrlAfter, strike.coolDown);
  //     Else
  //         Time = Time + strike.charge + strike.lockCtrlAfter;
  //     End
  // End for each
  // Apply unconditionnal damage affixes (DoubleDamage, QuadDamage, etc.) here if weapon hold affixes.
  // DPS = Damages / Time;
  return {
    dps: Math.round(damageSum / timeSum),
    critDps: Math.round(critDamageSum / timeSum),
  };
};

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
  const critMult = _get(strikeChainElement, "critMul");

  const vanillaDps = power / tick;

  return {
    dps: Math.round(vanillaDps),
    critDps: `${Math.round(power * 2 * critMult) / tick} (should be 203)`,
  };
};

export const calculateDpsRepeater = ({ strikeChainArray }) => {};

export const calculateDpsLightning = ({ strikeChainArray }) => {};

export const calculateDpsNerves = ({ strikeChainArray }) => {
  const strikeChainElement = strikeChainArray[0];

  const charge = _get(strikeChainElement, "charge", 0);
  const power = _get(strikeChainElement, "power[0]");
  const cooldown = _get(strikeChainElement, "coolDown");
  const scale = _get(strikeChainElement, "props.scale");
  const critMult = _get(strikeChainElement, "critMul");

  const vanillaDps = power / (charge + cooldown);
  const critDps = (power * 2 * critMult) / (scale + cooldown);

  return {
    dps: Math.round(vanillaDps),
    critDps: Math.round(critDps),
  };
};

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

    case NERVES_OF_STEEL.INTERNAL_ID:
      return calculateDpsNerves({ strikeChainArray, itemJsonProps });

    case QUICK_BOW.INTERNAL_ID:
      return calculateDpsQuickBow({ strikeChainArray, itemJsonProps });

    // case REPEATER_CROSSBOW.INTERNAL_ID:
    //   return calculateDpsRepeater({ strikeChainArray, itemJsonProps });

    case SONIC_CROSSBOW.INTERNAL_ID:
      return calculateDpsSonicCarbine({ strikeChainArray, itemJsonProps });

    default:
      return newCalculateDps({ strikeChainArray });
  }
};

//------------------------------------------------------------------------------

export default calculateDps;
