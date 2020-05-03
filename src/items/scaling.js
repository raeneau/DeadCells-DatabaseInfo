import React from 'react';

// -----------------------------------------------------------------------------

function Scaling(props) {

    const {
        firstColor, secondColor
    } = props;

    const updatedFirstColor = firstColor === 'Tactic' ? 'Tactics' : firstColor;
    const updatedSecondColor = secondColor === 'Tactic' ? 'Tactics' : secondColor;
    
    return (
        <div>
            Scaling: {updatedFirstColor} {updatedSecondColor !== null ? `/ ${secondColor}` : null}
        </div>
    );
      
}

// -----------------------------------------------------------------------------

export default Scaling;
