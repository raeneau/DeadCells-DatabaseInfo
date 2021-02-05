// TODO: Move to formatting folder? Also, stop using these weird objects?
export const formatDifficultyWithObjects = ({
  minDifficultyObject,
  maxDifficultyObject,
}) => {
  const min = minDifficultyObject.minDifficulty;
  const max = maxDifficultyObject.maxDifficulty;

  if (min === max) {
    return `${min} BC`;
  }

  if (
    Number(minDifficultyObject.maxDifficulty) ===
    Number(maxDifficultyObject.minDifficulty)
  ) {
    return Number(min) === 0 && Number(max) === 5
      ? `${min} BC+`
      : `${min}-${max} BC`;
  }

  // Is the maximum of the minimum 1 less than the minimum of the maximum
  // (Wow, that's confusing. Basically, do the numbers overlap)
  // EXAMPLE:
  // is it 0-1 and 2-3, and therefore should be 0-3,
  // or is it 0-1 and 3-4, and should stay that way?
  // OR it directly overlaps by ending on the same number
  if (
    Number(minDifficultyObject.maxDifficulty + 1) !==
      Number(maxDifficultyObject.minDifficulty) &&
    Number(min) !== Number(maxDifficultyObject.minDifficulty) &&
    Number(max) !== Number(minDifficultyObject.maxDifficulty)
  ) {
    return `${min}-${minDifficultyObject.maxDifficulty} BC & 
    ${maxDifficultyObject.minDifficulty}-${max} BC`;
  }
  if (max === 5 || max === undefined) {
    return `${min} BC+`;
  }

  return `${min}-${max} BC`;
};

// TODO: Not accurate, not used
export const formatDifficulty = ({ min, max }) => {
  if (min === max) {
    return `${min} BC`;
  }

  if (max === 5 || max === undefined) {
    return `${min} BC+`;
  }

  return `${min}-${max} BC`;
};

// -----------------------------------------------------------------------------

export default formatDifficulty;
