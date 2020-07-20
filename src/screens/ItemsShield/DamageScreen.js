import React from "react";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";
import ArrayDisplay from "../../components/common/arrayDisplay";
import BasicPercentageDisplay from "../../components/common/basicPercentageDisplay";
import BaseDps from "../../components/items/baseDps";
import BreachDps from "../../components/items/breachDps";
import DamagePerHit from "../../components/items/damagePerHit";
import BreachDamagePerHit from "../../components/items/breachDamagePerHit";
import WeaponEffectDuration from "../../components/items/weaponEffectDuration";
import DamageOverTimeStatus from "../../components/items/damageOverTimeStatus";

// -----------------------------------------------------------------------------

const DamageScreen = (props) => {
  const { itemJson, weaponJson } = props;

  return (
    <div>
      <h3 className="SubHeader">Damage / Combat</h3>
      <table>
        <tbody>
          <BasicDisplay
            name="Secondary Property Damage"
            value={
              _get(itemJson, "props.power[0]") ||
              _get(itemJson, "props.power2[0]")
            }
          />
          <DamageOverTimeStatus
            name="DPS of Damage over Time Status"
            damage={_get(itemJson, "props.dps")}
            duration={
              _get(itemJson, "props.aoeDuration") ||
              _get(itemJson, "props.duration")
            }
          />
          <BasicDisplay name="Ammo" value={_get(itemJson, "props.ammo")} />
          <BasicPercentageDisplay
            name="Block Damage Reduction"
            value={_get(itemJson, "props.prct")}
            defaultValue={0.75}
            requiredType="Shield"
            actualType={_get(itemJson, "__separator_group_Name")}
          />
          <DamagePerHit array={_get(weaponJson, "strikeChain")} />
          <WeaponEffectDuration
            name="AOE Duration"
            array={_get(weaponJson, "strikeChain")}
            objectKey="props"
          />
          <ArrayDisplay
            name="Breach Bonus"
            array={_get(weaponJson, "strikeChain")}
            objectKey="breachBonus"
          />
          <BreachDps array={_get(weaponJson, "strikeChain")} />
          <BreachDamagePerHit array={_get(weaponJson, "strikeChain")} />
        </tbody>
      </table>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default DamageScreen;
