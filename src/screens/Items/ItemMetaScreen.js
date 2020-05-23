import React from "react";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";
import Scaling from "../../components/items/scaling";
import Tags from "../../components/items/tags";
import img from "../../assets/goldcoin.png";

// -----------------------------------------------------------------------------

const ItemMetaScreen = (props) => {
  const { itemJson, itemName } = props;

  return (
    <div>
      <h3 className="SubHeader">Item Details</h3>
      <table>
        <tbody>
          <BasicDisplay name="Internal Name" value={itemName} />
          {/* ADD PICTURE HERE */}
          {/* ADD DESCRIPTION HERE */}
          {/* ADD AMBIENT DESCRIPTION HERE */}
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
};

// -----------------------------------------------------------------------------

export default ItemMetaScreen;
