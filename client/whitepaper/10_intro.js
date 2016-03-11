md_10 = `
# Efficient Decentral Governance of Structured Data

## 1. Abstract
> Imagine if you could not only vote for reddit posts, but govern the entire platform.

With the emergence of decentral organisations such as Bitcoin, Ethereum or Applications written on top of Ethereum new forms of governance are needed to direct and evolve this organisations. Currently this is stil an unsolved problem. In this paper, we analyze the problem space and propose a schema which could serve as a building block to a full self-governance solution.

The main idea is the a tightly coupeled relationship of user interactions such as voting and delegations statements to a meta data structure.

In the presented method, governance is understood as the task for a group of **actors** (**organisation**) with a clear **ownership** distribution to determenistically find a **consensus** out of a set of possible
**candidates**.

Efficient governance tries to optimize the amount of nessecery interaction done by each actor to arrive at his desired and reachable state.

This ist done by first introducing the problem space in 2.1. Based on this we discuss in 2.2 the role of data structures for governance, in particular thouse, which can be described with a regular grammar. In 2.3 a data structure migration schema is presented, which allowes an organisation to change its underlaying structure. In section 3 we present our current proof of concept implementation and discuss in 4. the roadmap for further iterations.
`;
