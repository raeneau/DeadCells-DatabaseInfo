import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";
import Scaling from "../../components/items/scaling";
import Tags from "../../components/items/tags";
import img from "../../assets/goldcoin.png";
import Sprite from "../../components/items/sprite";

// -----------------------------------------------------------------------------

function ItemMetaScreen(props) {
  const { itemJson, itemName } = props;

  return (
    <div>
      <h3 className="SubHeader">Item Details</h3>
      <table>
        <tbody>
          <BasicDisplay name="Internal Name" value={itemName} />
          {/* ADD DESCRIPTION HERE */}
          {/* ADD AMBIENT DESCRIPTION HERE */}
          <Sprite value={itemJson} />
          <BasicDisplay
            name="Type"
            value={_get(itemJson, "__separator_group_Name")}
          />
          <Scaling
            firstColor={_get(itemJson, "tier1")}
            secondColor={_get(itemJson, "tier2")}
          />
          {/* ADD SPECIAL EFFECTS HERE */}
          <BasicDisplay
            name="Base Price"
            value={_get(itemJson, "moneyCost")}
            img={<img alt="cell" src={img} height="15" />}
          />
          <Tags tagArray={_get(itemJson, "tags", null)} />
          <BasicDisplay
            name="Forced Affix When Legendary"
            value={_get(itemJson, "legendAffix")}
          />
        </tbody>
      </table>
    </div>
  );
}

ItemMetaScreen.propTypes = {
  itemJson: PropTypes.shape({
    __separator_group_Name: PropTypes.string,
    legendAffix: PropTypes.string,
    moneyCost: PropTypes.number,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        power: PropTypes.arrayOf(PropTypes.number),
        charge: PropTypes.number,
        lock: PropTypes.number,
      }),
    ),
    tier1: PropTypes.string,
    tier2: PropTypes.string,
  }).isRequired,
  itemName: PropTypes.string.isRequired,
};

// -----------------------------------------------------------------------------

export default ItemMetaScreen;
