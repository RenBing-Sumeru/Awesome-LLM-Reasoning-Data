Code-generation RL commonly treats unit-test pass/fail as reward, but trustworthy tests are expensive to author and validate. LLM-synthesized tests can instead accept wrong programs or reject correct ones, so scaling a new code corpus can scale noisy feedback rather than functional correctness.

CodeRM-NT replaces test-derived reward with a learned code reward model. It uses LLM-guided Monte Carlo tree search (MCTS), execution traces, and an LLM judge to create reward-labelled Python-code records, then uses the trained model for GRPO and difficulty-aware curriculum ordering.
