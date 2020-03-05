const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;

    return this;
  },
  addLink(value) {
    if (value == undefined && value != null) {
      this.chain.push(' ');
    } else {
      this.chain.push(value);
    }

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position - 1 > this.chain.length - 1 || position - 1 < 0) {
      this.chain = new Array();

      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
    }
    
    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    result = '';

    this.chain.forEach((item, index) =>
      result += index == this.chain.length - 1 ? `( ${item} )` : `( ${item} )~~`);
    this.chain = new Array();

    return result;
  }
};

module.exports = chainMaker;
