import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";
import BasicTimeDisplay from "../../components/common/basicTimeDisplay";

// -----------------------------------------------------------------------------

function DamageScreen(props) {
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
}

DamageScreen.propTypes = {
  itemJson: PropTypes.shape({
    __separator_group_Name: PropTypes.string,
    props: PropTypes.shape({
      aoeDuration: PropTypes.number,
      castCD: PropTypes.number,
      effectCD: PropTypes.number,
      dps: PropTypes.number,
      dotDps: PropTypes.number,
      life: PropTypes.number,
      power: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number,
      ]),
    }),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default DamageScreen;
