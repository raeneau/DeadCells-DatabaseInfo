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
          {_get(itemJson, "props.effectCD") && (
            <BasicDisplay
              name="Damage per Tick"
              value={(
                _get(itemJson, "props.dps[0]") *
                _get(itemJson, "props.effectCD")
              ).toFixed(1)}
            />
          )}
          <BasicTimeDisplay name="Recharge" value={_get(itemJson, "castCD")} />
          <BasicTimeDisplay
            name="Duration of Effect"
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
      dps: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number,
      ]),
      duration: PropTypes.number,
      effectCD: PropTypes.number,
      power: PropTypes.arrayOf(PropTypes.number),
    }),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default DamageScreen;
