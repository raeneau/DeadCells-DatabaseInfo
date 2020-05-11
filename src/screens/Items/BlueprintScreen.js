import React from "react";
import _get from "lodash.get";

import BasicDisplay from "../../components/common/basicDisplay";

import ComboRate from "../../components/items/comboRate";

import AttackDuration from "../../components/items/attackDuration";

// -----------------------------------------------------------------------------

function Items(props) {
  const { cellCost } = props;

  return (
    <div>
      <h3 className="SubHeader">Blueprint</h3>
      <table>
        <tbody>
          <BasicDisplay name="Unlock Cost" value={cellCost} />
        </tbody>
      </table>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Items;
