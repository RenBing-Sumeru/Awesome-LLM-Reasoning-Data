ReARTeR combines retrieval-augmented reasoning with trustworthy process rewarding. It uses a process reward model and process explanation model at test time, then uses MCTS-guided search to collect step-level preference data for post-training.

For Track 05, the reusable object is a retrieval-grounded search trace: retrieved context, reasoning step, PRM score, PEM explanation, search decision, and preference signal.

- Year / venue: 2025 · arXiv.
- Author affiliations: Gaoling School of Artificial Intelligence, Renmin University of China; School of Information Technology and Management, University of International Business and Economics; Kuaishou Technology Co., Ltd.
- Atlas role: process_supervision, verifier_reward, construction_recipe.
- Domains: retrieval, multi-hop reasoning.
- Current status: verified.
- Why it belongs: ReARTeR shows how RAG, process rewards, explanations, MCTS, and preference optimization interact in one rollout/search pipeline.
