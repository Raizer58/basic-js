module.exports = function transform(arr ) {
  let arrayTransform = [];
  arr.forEach((arg, index)=>
    arg == "--discard-next"? false:
    arg == "--discard-prev"? arrayTransform.pop(arg):
    arg == "--double-next" ? index !== arr.length-1? arrayTransform.push(arr[index+1]):false:
    arg == "--double-prev" ? index > 0? arrayTransform.push(arr[index-1]):false:
    arr[index-1] !== "--discard-next"? arrayTransform.push(arg):false, [])
  return arrayTransform;
};
