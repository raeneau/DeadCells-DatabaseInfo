import React from "react";
import _get from "lodash.get";

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
          <AttackDuration
            charge={_get(strikeChain, "[0].charge", null)}
            cooldown={_get(strikeChain, "[0].coolDown", null)}
          />
          <ArrayDisplay
            name="Lock"
            array={strikeChain}
            objectKey="lockCtrlAfter"
          />
        </tbody>
      </table>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default ComboScreen;
