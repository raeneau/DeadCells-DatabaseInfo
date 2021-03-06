import React from "react";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";
import BasicTimeDisplay from "../../components/common/basicTimeDisplay";

// -----------------------------------------------------------------------------

const DamageScreen = (props) => {
  const { itemJson } = props;

  return (
    <div>
      <h3 className="SubHeader">Damage / Combat</h3>
      <table>
        <tbody>
          <BasicDisplay
            name="Damage"
            value={_get(itemJson, "props.power[0]")}
          />
          <BasicDisplay
            name="Base DPS"
            value={
              _get(itemJson, "props.dps[0]") || _get(itemJson, "props.dps")
            }
          />
          <BasicDisplay
            name="Damage over Time DPS"
            value={_get(itemJson, "props.dotDps")}
          />
          <BasicDisplay
            name="Trap Health (will break at 0 health)"
            value={_get(itemJson, "props.life")}
          />
          <BasicTimeDisplay name="Recharge" value={_get(itemJson, "castCD")} />
          <BasicTimeDisplay
            name="Time between shots"
            value={_get(itemJson, "props.effectCD")}
          />
          <BasicTimeDisplay
            name="AOE Duration"
            value={_get(itemJson, "props.aoeDuration")}
          />
        </tbody>
      </table>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default DamageScreen;
