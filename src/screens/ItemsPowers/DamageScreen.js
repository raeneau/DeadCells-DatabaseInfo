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
            value={
              _get(itemJson, "props.power[0]") || _get(itemJson, "props.power")
            }
          />
          <BasicDisplay
            name="Secondary Damage"
            value={_get(itemJson, "props.power2[0]")}
          />
          <BasicDisplay name="Base DPS" value={_get(itemJson, "props.dps")} />
          <BasicDisplay
            name="Effect DPS"
            value={_get(itemJson, "props.dps2")}
          />
          <BasicTimeDisplay name="Recharge" value={_get(itemJson, "castCD")} />
          <BasicTimeDisplay
            name="Tick (Time between damage)"
            value={_get(itemJson, "props.tick")}
          />
          <BasicTimeDisplay
            name="Power Duration"
            value={_get(itemJson, "props.duration")}
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
    props: PropTypes.shape({
      aoeDuration: PropTypes.number,
      castCD: PropTypes.number,
      duration: PropTypes.number,
      power: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number,
      ]),
      power2: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number)]),
      tick: PropTypes.number,
    }),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default DamageScreen;
