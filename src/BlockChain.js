const Block = require("./Block");

class BlockChain {
  constructor() {
    this.chain = [];
  }

  addBlock(data, timestamp = new Date()) {
    const index = this.chain.length;
    const prevHash =
      this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
    const block = new Block(index, data, prevHash, timestamp);

    this.chain.push(block);
  }

  isValid() {
    for (let i = 0; i < this.chain.length; ++i) {
      const block = this.chain[i];

      if (block.hash !== block.getHash()) {
        return false;
      }

      if (i > 0) {
        const prevBlock = this.chain[i - 1];
        if (block.prevHash !== prevBlock.hash) {
          return false;
        }
      }
    }

    return true;
  }
}

module.exports = BlockChain;
