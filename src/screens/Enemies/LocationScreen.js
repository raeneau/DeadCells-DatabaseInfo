import React from "react";

// Local modules.
import enemyLocation from "../../utils/enemyLocation";

// -----------------------------------------------------------------------------

// const cnBase = "ItemProperties";

// TODO: Move to formatting folder?
const formatDifficulty = ({ min, max }) => {
  if (min === max) {
    return `${min} BC`;
  }
  if (max === 5 || max === undefined) {
    return `${min} BC+`;
  }
  return `${min}-${max} BC`;
};

const LocaationScreen = (props) => {
  const { userInput } = props;

  const enemyBiomeLocations = enemyLocation({ enemy: userInput });
  return (
    <div>
      <h3 className="SubHeader">Location(s)</h3>
      <table>
        <tbody>
          {enemyBiomeLocations.map((location) => (
            <tr key={`Combo__location${location.name}`}>
              <td>{location.name}</td>
              <td>
                {formatDifficulty({
                  min: location.minDifficulty,
                  max: location.maxDifficulty,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default LocaationScreen;
