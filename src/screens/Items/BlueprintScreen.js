import React from "react";

import BasicDisplay from "../../components/common/basicDisplay";
import img from "../../assets/cell.png";

// -----------------------------------------------------------------------------

const BlueprintScreen = (props) => {
  const { cellCost } = props;

  return (
    <div>
      <h3 className="SubHeader">Blueprint</h3>
      <table>
        <tbody>
          <BasicDisplay
            name="Unlock Cost"
            value={cellCost}
            img={<img alt="cell" src={img} height="15" />}
          />
        </tbody>
      </table>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default BlueprintScreen;
