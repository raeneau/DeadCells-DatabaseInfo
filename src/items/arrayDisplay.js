import React from 'react';

// -----------------------------------------------------------------------------

function ArrayDisplay(props) {
    const {
        name, array, objectKey
    } = props;

    const message = array.reduce(function(accumulator, element, index){
        const attackNumber = index + 1;
        const desiredData = element[objectKey];

        // TODO: Make work with multiple values here
        if (typeof desiredData === 'object' && desiredData.length > 1) {
            return accumulator;
        } else {
            return accumulator + `${attackNumber > 1 ? `\nHit ${attackNumber}:` : ''} ${desiredData}`;
        }
    }, '');

    return (
        <div>
            {name}: 
            {message}
        </div>
    );
}

// -----------------------------------------------------------------------------

export default ArrayDisplay;
