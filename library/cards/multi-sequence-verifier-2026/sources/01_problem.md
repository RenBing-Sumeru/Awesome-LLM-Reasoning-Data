Parallel test-time scaling normally generates several candidate solutions and scores them one by one. That wastes a potentially useful signal: candidates in the same pool can agree, contradict one another, or reveal that a seemingly plausible answer is an outlier.

The paper asks whether a verifier should observe the candidate set jointly and whether it can stop decoding before every parallel sequence finishes. The target is better selection at a fixed latency budget, rather than an accuracy gain obtained by quietly waiting for more completed answers.
