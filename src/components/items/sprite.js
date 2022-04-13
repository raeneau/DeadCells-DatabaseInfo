import React from "react";
import PropTypes from "prop-types";

// import ReactCrop from "react-image-crop";

import cardIcons from "../../assets/cardIcons.png";
// import monsters from "../../assets/monsters.png";

// -----------------------------------------------------------------------------

// TODO: Display cropped sprite so it's easy to copy/paste?
// const getCroppedImg = (x, y, size) => {
//   // eslint-disable-next-line
//   const img1 = new Image(2048, 2048); // Image constructor
//   img1.src = "";

//   // eslint-disable-next-line
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");
//   canvas.width = size;
//   canvas.height = size;

//   ctx.drawImage(
//     img1,
//     0,
//     0,
//     x * size, // (snake fangs) 30 * 24, crop x
//     y * size, // 5 * 24, crop y
//     size, // crop width
//     size, // crop height
//     0,
//     0,
//     size,
//     size,
//   );

//   // Test canvas
//   // ctx.beginPath();
//   // ctx.rect(0, 0, 1000, 1000);
//   // ctx.fillStyle = "blue";
//   // ctx.fill();

//   return canvas.toDataURL();
// };

function Sprite(props) {
  const { value } = props;

  const { x: xPosition, y: yPosition, size } = value.icon; // Positions are 0-indexed

  if (value === undefined) {
    return null;
  }

  const divStyle = {
    backgroundImage: `url(${cardIcons})`,
    backgroundPosition: `-${xPosition * size}px -${yPosition * size}px`,
    width: "24px",
    height: "24px",
  };

  return (
    <tr>
      <td>Sprite</td>
      <td>
        <div style={divStyle} />
        <div>
          <i>Position in cardIcons file:</i>
        </div>
        <div>Row: {yPosition + 1}</div>
        <div>Column: {xPosition + 1}</div>
      </td>
    </tr>
  );
}

Sprite.propTypes = {
  value: PropTypes.shape({
    icon: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      size: PropTypes.number,
    }),
  }),
};

Sprite.defaultProps = {
  value: undefined,
};

// -----------------------------------------------------------------------------

export default Sprite;
