import React from "react";
import PropTypes from "prop-types";

// Local modules.
import ArrayDisplay from "../../components/common/arrayDisplay";
import ComboRate from "../../components/items/comboRate";
import AttackDuration from "../../components/items/attackDuration";

// -----------------------------------------------------------------------------

const ComboScreen = (props) => {
  const { strikeChain } = props;

  return (
    <div>
      <h3 className="SubHeader">Combo</h3>
      <table>
        <tbody>
          <ComboRate array={strikeChain} />
          <AttackDuration array={strikeChain} />
          <ArrayDisplay name="Charge" array={strikeChain} objectKey="charge" />
          <ArrayDisplay
            name="Lock (lockCtrlAfter)"
            array={strikeChain}
            objectKey="lockCtrlAfter"
          />
          <ArrayDisplay
            name="Cooldown"
            array={strikeChain}
            objectKey="coolDown"
          />
        </tbody>
      </table>
    </div>
  );
};

ComboScreen.propTypes = {
  strikeChain: PropTypes.arrayOf(
    PropTypes.shape({
      charge: PropTypes.number,
      cooldown: PropTypes.number,
      lockControlAfter: PropTypes.number,
    }),
  ),
};

ComboScreen.defaultProps = {
  strikeChain: [],
};

// -----------------------------------------------------------------------------

export default ComboScreen;
