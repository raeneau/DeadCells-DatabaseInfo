import React from 'react';
import _get from 'lodash.get';

// -----------------------------------------------------------------------------

//
const unwantedTags = [
    'UnlockInPublicEvent'
];

function Tags(props) {
    const {
        tagArray
    } = props;

    // If there are no tags, let the user know
    if (tagArray === undefined || tagArray.length === 0) {
        return (
            <div>
                Tags: N/A
            </div>
        );
    }

     // Remove any internal tags (we don't want those on on the wiki)
    const updatedTagArray = tagArray.filter((element) => {
        const tag = _get(element, 'tag', '');
        return !unwantedTags.includes(tag);
    });

    const readableTags = <span>{updatedTagArray.map((element, index) => {
        const tag = _get(element, 'tag', '');

        // Don't add a comma to the end of the list
        const isEndOfList = (index + 1) === updatedTagArray.length;

        // Regex to add spaces next to capital letters & trim whitespace
        const tagWithSpaces = tag.replace(/([A-Z])/g, ' $1').trim();

        return `${tagWithSpaces}${isEndOfList ? '' : ', '}`;
    })}</span>;

    return (
        <div>
            Tags:
            {readableTags}
        </div>
    );
}

// -----------------------------------------------------------------------------

export default Tags;
