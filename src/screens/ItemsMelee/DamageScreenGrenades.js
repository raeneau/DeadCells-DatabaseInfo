import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

import BasicDisplay from "../../components/common/basicDisplay";
import ArrayDisplay from "../../components/common/arrayDisplay";
import BaseDps from "../../components/items/baseDps";

// -----------------------------------------------------------------------------

const DamageScreenGrenades = (props) => {
  const { itemJson } = props;

  return (
    <div>
      <h3 className="SubHeader">Damage / Combat</h3>
      <table>
        <tbody>
          <BaseDps array={_get(itemJson, "strikeChain")} />
          <BasicDisplay name="Recharge" value={_get(itemJson, "castCD")} />
          <ArrayDisplay
            name="Damage on Hit"
            array={_get(itemJson, "props")}
            objectKey="power"
          />
          <ArrayDisplay
            name="Breach Bonus"
            array={_get(itemJson, "strikeChain")}
            objectKey="breachBonus"
          />
        </tbody>
      </table>
    </div>
  );
};

DamageScreenGrenades.propTypes = {
  itemJson: PropTypes.shape({
    props: PropTypes.shape({
      castCD: PropTypes.number,
    }),
    strikeChain: PropTypes.arrayOf(
      PropTypes.shape({
        breachBonus: PropTypes.number,
        power: PropTypes.number,
      }),
    ),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default DamageScreenGrenades;
