const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    if (value == null){
      value=String(value)
    };
    this.arrChain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (position > 0 && position <= this.arrChain.length){
      this.arrChain.splice(position-1,1);
      return chainMaker;
    }
    this.arrChain = [];
    throw 'Error'
  },
  reverseChain() {
    this.arrChain.reverse();
    return chainMaker;
  },
  finishChain() {
    let returnValue = "( " + this.arrChain.join(" )~~( ") +" )";
    this.arrChain = [];
    return returnValue;
  }
};

module.exports = chainMaker;
