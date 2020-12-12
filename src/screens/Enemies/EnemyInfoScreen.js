import React from "react";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";

// -----------------------------------------------------------------------------

const EnemyInfoScreen = (props) => {
  const { enemyJson } = props;

  return (
    <div>
      <h3 className="SubHeader">Enemy Info</h3>
      <table>
        <tbody>
          <BasicDisplay
            name="Base HP"
            value={_get(enemyJson, "life[0]") || _get(enemyJson, "life")}
          />
          <BasicDisplay
            name="From DLC?"
            value={_get(enemyJson, "dlc") || "No"}
          />
        </tbody>
      </table>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemyInfoScreen;
