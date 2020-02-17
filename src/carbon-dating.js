const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(arg) {
  return typeof arg == "string" && parseFloat(arg) < 15 && parseFloat(arg) > 0 ? Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(arg)))/(0.693/HALF_LIFE_PERIOD)) : false;
};
