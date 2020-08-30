import React from "react";

// Local modules.
import CellUnlockCost from "../../components/items/cellUnlockCost";
import img from "../../assets/cell.png";
import BlueprintDropInfo from "../../components/items/blueprintDropInfo";

// -----------------------------------------------------------------------------

const BlueprintScreen = (props) => {
  const { cellCost, internalId } = props;

  return (
    <div>
      <h3 className="SubHeader">Blueprint</h3>
      <table>
        <tbody>
          <BlueprintDropInfo internalId={internalId} />
          <CellUnlockCost
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
