Prior-work baseline: greedy decoding, ordinary SFT, answer-only evaluation, or fixed benchmark scoring, depending on the paper.

What changes: makes sampling budget a first-class baseline for later pass@k, best-of-N, and TTC work.

Direction signal: this paper gives the track a concrete unit to audit: samples, branches, verifier labels, synthetic accepted traces, RL reward, or inference FLOPs.

Quality signal: Published at ICLR 2023 according to the official arXiv record..

What is not new: the underlying reasoning benchmarks and final-answer scoring are often inherited from prior work.

Inspect before reuse: verifier independence, data lineage, sampling budget, benchmark overlap, artifact license, and whether improvements are attributed to the right lever.
