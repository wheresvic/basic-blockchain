const expect = require("chai").expect;

const Block = require("./Block");
const BlockChain = require("./BlockChain");

describe("BlockChain", () => {
  it("should create a blockchain with a single block", () => {
    // given
    const bc = new BlockChain();

    // when
    bc.addBlock({ snoop: "dawg" }, 1);

    // then
    expect(bc.chain.length).to.equal(1);
    const b0 = bc.chain[0];
    expect(b0).to.deep.equal({
      index: 0,
      timestamp: 1,
      data: { snoop: "dawg" },
      prevHash: 0,
      hash: "4f57e07434dd01ea0123173f9254481c76f9578e532e7528c7717d8fc4480870"
    });

    expect(bc.isValid()).to.be.true;
  });

  it("should create a blockchain with 2 blocks", () => {
    // given
    const bc = new BlockChain();

    // when
    bc.addBlock({ snoop: "dawg" }, 1);
    bc.addBlock({ yay: "yo" }, 2);

    // then
    expect(bc.chain.length).to.equal(2);

    const b0 = bc.chain[0];
    const b1 = bc.chain[1];

    expect(b1.prevHash).to.equal(b0.hash);
    expect(b1).to.deep.equal({
      index: 1,
      timestamp: 2,
      data: { yay: "yo" },
      prevHash:
        "4f57e07434dd01ea0123173f9254481c76f9578e532e7528c7717d8fc4480870",
      hash: "f4d408175f7ac6fee3de2a961d2ef6a00bf1a4503fc1762f5d7d5f022688d573"
    });

    expect(bc.isValid()).to.be.true;
  });

  it("should invalidate a blockchain on any change", () => {
    // given
    const bc = new BlockChain();
    bc.addBlock({ snoop: "dawg" }, 1);
    bc.addBlock({ yay: "yo" }, 2);

    // when
    bc.chain[1].data.yay = "no";

    // then
    expect(bc.chain.length).to.equal(2);
    expect(bc.isValid()).to.be.false;
  });
});
