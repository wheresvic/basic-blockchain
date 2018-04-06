# Basic Blockchain

A very basic blockchain written in [JavaScript](https://codingislove.com/simple-blockchain-javascript/)

## The concept

A blockchain is a data structure like linked lists with a growing set of nodes or blocks. In a blockchain, each node is called a "block" and each block has an index, timestamp, hash of itself, hash of the previous block and some data.

The hash of each block gives it a unique identity like a fingerprint. A block's hash is generated only once when the block is created and it is generated using the values of all the other attributes of the block. Therefore, if any of the values are changed, the hash will no more be valid and hence the entire block will be invalidated. The calculation of the hash must be reproducable for verification purposes, i.e. a hash function for a given set of values must produce the same hash.

To actually link the blocks together to make a blockchain that cannot be tampered with, each block stores the hash of the previous block. Thus, if the hash of a single block changes, the chain will be broken and given that the last known valid block is now de-linked from the origin, the entire chain will be invalidated.

A cryptocurrency blockchain implementation has a lot more checks and balances in place, such as distributing the blocks via a p2p network and ensuring that the addition of each block requires the verification of the entire chain (which involves a time delay), etc.
