module.exports = function countCats(arg) {
  let countCat = 0;
  arg.forEach(arg_1 => arg_1.forEach(arg_2 => countCat += arg_2 == "^^" ? 1 : 0));
  return countCat;
};
