The paper's concrete novelty for a reasoning-data atlas is the coupling of search, process-value construction, and mutual self-training.

- It treats a reasoning prefix as a state whose target combines observed terminal reachability and minimum observed distance to a correct answer, rather than copying only a final binary outcome onto every prefix.
- One searched tree yields two records with different contracts: terminally verified complete paths for policy SFT and scalar partial-solution records for process value-model training.
- The learned value model is not merely a post-generation filter. It participates in upper-confidence selection, expansion scoring, greedy rollout, backup, and early stopping, changing the explored data distribution before selection.
- Both generator and critic are refreshed over iterations, rather than holding the critic fixed while updating only the policy.
- The public recipe exposes enough code and several datasets/checkpoints to inspect the loop, while the flattened release format also reveals which tree-level audit fields are missing.

The nearest comparisons clarify the boundary. ReST^EM filters generated CoT mainly by final outcome; MATH-SHEPHERD derives automated process supervision from random rollouts; TS-LLM uses MCTS with TD-style process values; AlphaLLM also studies MCTS-based self-improvement. ReST-MCTS* is distinctive in its specific distance-aware value construction and dual policy/value mutual-training loop, not because any individual component is unprecedented.
