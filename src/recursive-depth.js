module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        for (let i of arr){
          if (typeof i == "object"){
            arr = arr.flat();
            depth += this.calculateDepth(arr);
            break;
          }
        }
        return depth;
    }
};

