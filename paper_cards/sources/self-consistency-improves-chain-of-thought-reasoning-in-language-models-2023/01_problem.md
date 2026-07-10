Primary source: https://arxiv.org/abs/2203.11171

Venue/date: ICLR 2023, 2023.

Decision boundary: Self-Consistency Improves Chain of Thought Reasoning in Language Models belongs in Scaling / RLVR / TTC because it measures reasoning improvement from repeated sampled traces rather than new training data. It is not mainly a general benchmark survey; the useful object for this atlas is the budget, verifier, rollout, or reward contract exposed by the paper.

Concrete problem: whether a model should commit to one greedy chain or spend extra inference budget sampling many chains.

Atlas relevance: this card records the data object, verifier surface, inference budget, and attribution risk so later papers can be compared without mixing data scale, model scale, optimizer changes, and test-time compute.

Data object / evaluation surface: Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer.

L4 collection note: the official arXiv source was checked on 2026-07-10. The card is complete enough for Chinese review, while artifact and license details remain review items where noted.
