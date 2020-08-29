import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Constants.
import { notFound } from "../../constants/stringConstants";

// -----------------------------------------------------------------------------

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

  const readableTags = (
    <span>
      {tagArray.map((element, index) => {
        const tag = _get(element, "tag", "");

        // Don't add a comma to the end of the list
        const isEndOfList = index + 1 === tagArray.length;

        return `${tag}${isEndOfList ? "" : ", "}`;
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

Tags.propTypes = {
  tagArray: PropTypes.arrayOf(
    PropTypes.shape({
      power: PropTypes.arrayOf(PropTypes.number),
      charge: PropTypes.number,
      lock: PropTypes.number,
    }),
  ),
};

Tags.defaultProps = {
  tagArray: [],
};
// -----------------------------------------------------------------------------

export default Tags;
