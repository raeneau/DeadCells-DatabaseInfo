import React from 'react';
import _get from 'lodash.get';

// -----------------------------------------------------------------------------

function ArrayDisplay(props) {
    const {
        name, array, objectKey
    } = props;

    console.log('UHHH', array);
    let message = '';

    array.reduce(function(sum, element, index){
        const desiredData = element[objectKey];
        console.log('HMMM', desiredData, element);
        // TODO: Make work with multiple values here
        if (typeof desiredData === 'object' && desiredData.length > 1) {
            message += 'i see u a binch';
        } else {
            message += desiredData;
        }
    });

    console.log('MESSAGE');

    return (
        <div>
            {name}: {message}
        </div>
    );
}

// -----------------------------------------------------------------------------

export default ArrayDisplay;
