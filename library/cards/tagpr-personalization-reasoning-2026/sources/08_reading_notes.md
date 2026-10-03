Read Section 3.2 first for the trace-generation/filtering/tagging pipeline, then Sections 3.3.1–3.3.2 for the different supervision contracts. Follow Figure 3 and Section 3.3.3 to distinguish guided RL from exploratory RL.

Keep the data budgets separate: 1,000 sampled instances per each of six tasks and 16 generated candidates per instance describe construction; approximately 2,000 retained examples describe SFT; two approximately 10,000-sample preference sets train PRMU; Appendix A.1 describes additional RL sampling. These are not interchangeable counts.

Check that tag rewards validate structure and that PRMU's scalar is sequence-level. The default recency-based user-profile retrieval and alternative retrieval experiments are in Section 4.5/Appendix D; using PGraphRAG for evaluation is not itself a new graph retrieval method. Table-level task metrics and ablations should be read before reusing broad performance claims.

The official arXiv page is the pinned source. This card was prepared by a paper author and remains subject to atlas maintainer review.
