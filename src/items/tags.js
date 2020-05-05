import React from "react";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// -----------------------------------------------------------------------------

//
const unwantedTags = ["UnlockInPublicEvent"];

function Tags(props) {
  const { tagArray } = props;

  // If there are no tags, just return nothing
  if (tagArray === null || tagArray.length === 0 || _isEmpty(tagArray[0])) {
    return null;
  }

  // Remove any internal tags (we don't want those on on the wiki)
  const updatedTagArray = tagArray.filter((element) => {
    const tag = _get(element, "tag", "");
    return !unwantedTags.includes(tag);
  });

  const readableTags = (
    <span>
      {updatedTagArray.map((element, index) => {
        const tag = _get(element, "tag", "");

        // Don't add a comma to the end of the list
        const isEndOfList = index + 1 === updatedTagArray.length;

        // Regex to add spaces next to capital letters & trim whitespace
        const tagWithSpaces = tag.replace(/([A-Z])/g, " $1").trim();

        return `${tagWithSpaces}${isEndOfList ? "" : ", "}`;
      })}
    </span>
  );

  return (
    <div>
      Tags:
      {readableTags}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Tags;
