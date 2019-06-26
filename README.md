# Basic Blockchain

A very basic blockchain written in [JavaScript](https://codingislove.com/simple-blockchain-javascript/)

An online blockchain [demo](https://anders.com/blockchain/).

## The concept

A blockchain is a data structure like linked lists with a growing set of nodes or blocks. In a blockchain, each node is called a "block" and each block has an index, timestamp, hash of itself, hash of the previous block and some data.

The hash of each block gives it a unique identity like a fingerprint. A block's hash is generated only once when the block is created and it is generated using the values of all the other attributes of the block. Therefore, if any of the values are changed, the hash will no more be valid and hence the entire block will be invalidated. The calculation of the hash must be reproducable for verification purposes, i.e. a hash function for a given set of values must produce the same hash.

To actually link the blocks together to make a blockchain that cannot be tampered with, each block stores the hash of the previous block. Thus, if the hash of a single block changes, the chain will be broken and given that the last known valid block is now de-linked from the origin, the entire chain will be invalidated.

## Mining

A cryptocurrency blockchain implementation has a concept of _mining_, whereby the hash of a block needs to fulfill certain criteria, e.g. the hash must start with 4 zeros or the hash must be a valid natural number under a certain value. To enable searching for a hash that meets this criteria, an additional flexible parameter called a `nonce` is added. A simple implementation might use a number as a nonce so that mining is simply looping over all possible numbers to find a fitting hash.

Moreover, a crypocurrency implementation also has the flexibility of choosing which transactions to group into a single block thereby enabling more options for mining.

## Distributed verification

A cryptocurrency blockchain implementation also has it's entire blockchain replicated over many different peers. Not all peers have the full chain, as it is enough to keep only a recent portion of the chain for verification purposes. Most importantly, whoever has the longest chain is determined to have the correct copy of the blockchain!

Note that in a network like Bitcoin, the computational complexity of mining a block steadly increases so that it takes 10 minutes to mine a block. This computational complexity is known as difficulty and it could be as simple as increasing the amount of leading zeros that a hash needs to require to fulfill the mining criteria.

## Rewards

In a cryptocurrency implementation, each block in a blockchain essentially stores a list of transactions. However, in order for someone to spend money, they need to initially get it. In the bitcoin world, this is known as a `coinbase` transaction.

Moreover, in order to make it lucrative for miners to spend the effort in mining blocks, each successfully mined block results in some reward for the miner.



