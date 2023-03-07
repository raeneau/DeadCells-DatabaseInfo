import React from "react";
import PropTypes from "prop-types";
import _isEmpty from "lodash.isempty";
import _get from "lodash.get";

// Local modules.
import enemyLocation from "../../utils/enemyLocation";

// -----------------------------------------------------------------------------

function LocationScreen(props) {
  const { userInput, databaseVersion } = props;

  const enemyBiomeLocations = enemyLocation({
    enemy: userInput,
    databaseVersion,
  });
  const isTrashMob = _get(userInput, "enemyJson.props.isTrashMob");

  return (
    <div>
      <h3 className="SubHeader">Location(s)</h3>
      {!_isEmpty(enemyBiomeLocations) ? (
        <table>
          <tbody>
            {enemyBiomeLocations.map((location) => (
              <tr key={`Combo__location${location.name}`}>
                <td>{location.name}</td>
                <td>{location.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="notFoundWrapper">N/A</div>
          <div className="notFoundWrapper">
            ({isTrashMob ? "spawned by another mob" : "is a boss or mini-boss"})
          </div>
        </>
      )}
    </div>
  );
}

LocationScreen.propTypes = {
  databaseVersion: PropTypes.string.isRequired,
  userInput: PropTypes.shape({
    enemyJson: PropTypes.shape({
      props: PropTypes.shape({
        isTrashMob: PropTypes.bool,
      }),
    }),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default LocationScreen;
