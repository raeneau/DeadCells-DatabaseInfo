import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";

// -----------------------------------------------------------------------------

const ScrollCountScreen = (props) => {
  const { userInput } = props;

  return (
    <div>
      <h3 className="SubHeader">Scroll Count</h3>
      <table>
        <tbody>
          <BasicDisplay
            name="Scrolls of Power"
            value={_get(userInput, "itemJson.tripleUps")}
          />
          <BasicDisplay
            name="Dual Stat Scrolls"
            value={_get(userInput, "itemJson.doubleUps")}
          />
          <BasicDisplay
            name="Scroll Fragments (3BC)"
            value={_get(userInput, "itemJson.quarterUpsBC3")}
          />
          <BasicDisplay
            name="Scroll Fragments (4BC)"
            value={_get(userInput, "itemJson.quarterUpsBC4")}
          />
        </tbody>
      </table>
    </div>
  );
};

ScrollCountScreen.propTypes = {
  userInput: PropTypes.shape({
    itemJson: PropTypes.shape({
      tripleUps: PropTypes.number,
      doubleUps: PropTypes.number,
      quarterUpsBC3: PropTypes.number,
      quarterUpsBC4: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default ScrollCountScreen;
