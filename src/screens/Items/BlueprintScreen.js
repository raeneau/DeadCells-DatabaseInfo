import React from "react";
import PropTypes from "prop-types";

// Local modules.
import CellUnlockCost from "../../components/items/cellUnlockCost";
import img from "../../assets/cell.png";
import BlueprintDropInfo from "../../components/items/blueprintDropInfo";

// -----------------------------------------------------------------------------

function BlueprintScreen(props) {
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
}

BlueprintScreen.propTypes = {
  cellCost: PropTypes.number,
  internalId: PropTypes.string.isRequired,
};

BlueprintScreen.defaultProps = {
  cellCost: 0,
};

// -----------------------------------------------------------------------------

export default BlueprintScreen;
