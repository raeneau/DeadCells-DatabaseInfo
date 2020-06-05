const formatInput = (string) =>
  String(string).toUpperCase().replace(/\s/g, "").replace(/'/g, "");

export default formatInput;
