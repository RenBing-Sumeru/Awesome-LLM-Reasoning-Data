- Verification contract: mixed. Final answers provide an oracle correctness signal, while inferred process rewards estimate whether a partial step helps reach that correct answer.
- Recorded verifier/reward/environment: a process reward model guides search and is refined from MCTS-derived value targets.
- Supervision granularity: step_level and process_reward.

- Base model: Llama, Mistral, and GLM/SciGLM-family policy or value models appear in the released implementation paths.
- Teacher: oracle final answers and search-derived value estimates, not manual dense step labels.
- Generator: policy rollouts expanded by MCTS* under PRM guidance.
- Filtering rule: select higher-quality traces from search and infer value targets from whether search states can lead to correct answers.
- Sampling protocol: tree search over intermediate reasoning states; exact rollout budget should be pinned per experiment before reuse.
- Optimizer/scaffold: ReST-style iterative self-training of policy and process reward models.
