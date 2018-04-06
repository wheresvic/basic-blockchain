const crypto = require("crypto");

class Block {
  constructor(index, data, prevHash, timestamp = Date.now()) {
    this.index = index; // what do you need the index for?
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.getHash();
  }

  getHash() {
    const hash = crypto.createHash("sha256");
    return hash
      .update(
        JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp
      )
      .digest("hex");
  }
}

module.exports = Block;
