import React from "react";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Constants.
import { notFound } from "../../constants/stringConstants";

// -----------------------------------------------------------------------------

//
const unwantedTags = ["UnlockInPublicEvent"];

function Tags(props) {
  const { tagArray } = props;

  // If there are no tags, just return N/A
  if (tagArray === null || tagArray.length === 0 || _isEmpty(tagArray[0])) {
    return (
      <tr>
        <td>Tags</td>
        <td>{notFound}</td>
      </tr>
    );
  }

  // Remove any internal tags (we don't want those on on the wiki)
  const updatedTagArray = tagArray.filter((element) => {
    const tag = _get(element, "tag", "");
    return !unwantedTags.includes(tag);
  });

  // NOW if there are no tags, return N/A also
  if (
    updatedTagArray === null ||
    updatedTagArray.length === 0 ||
    _isEmpty(updatedTagArray[0])
  ) {
    return (
      <tr>
        <td>Tags</td>
        <td>{notFound}</td>
      </tr>
    );
  }

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
    <tr>
      <td>Tags</td>
      <td>{readableTags}</td>
    </tr>
  );
}

// -----------------------------------------------------------------------------

export default Tags;
