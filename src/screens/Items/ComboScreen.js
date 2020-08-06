import React from "react";

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
          <ArrayDisplay
            name="Lock"
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

// -----------------------------------------------------------------------------

export default ComboScreen;
