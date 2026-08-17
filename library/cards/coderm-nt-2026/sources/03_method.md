1. **Build search states.** For each Python question, Qwen2.5-Coder-32B-Instruct generates code. The system splits it at indentation boundaries and LLM-inserted print statements; prefixes become MCTS nodes.

2. **Expand and judge execution.** MCTS selects nodes with UCT, asks the LLM to complete a prefix, inserts diagnostic prints and sample calls, then executes the code. An LLM judge sees the question, code, and trace, assigns a normalized 0–1 score, and that reward is back-propagated. No unit test decides acceptance.

3. **Create reward supervision.** Non-root nodes yield question, partial-or-complete response, and Q-value records. From 12,000 sampled Magicoder questions, 6,000 produce 196,098 scalar records and 6,000 produce 71,205 ordered pairs.

4. **Train and apply the reward model.** A Qwen2.5-Coder-7B-Instruct backbone first fits scalar rewards with MSE, then pairs with contrastive loss. During GRPO it scores complete policy outputs; it can also average eight sampled scores per question to order easier examples before harder ones.

Reproduction requires the MCTS prompts, execution sandbox, Qwen2.5-Coder-32B judge/generator, data revisions, and RL configuration. Sampling seeds, full compute budget, and the released reward-data file format are not fully disclosed.
