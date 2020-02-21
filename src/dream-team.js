module.exports = function createDreamTeam(arr) {
  return !Array.isArray(arr) ? false :
  arr.reduce((acc, arg)=> acc += typeof arg == "string" ? arg.replace(/\s/g, "").slice(0,1):"", "").toUpperCase().split("").sort().join("");
};