1. **Route the instruction.** An LLM receives the instruction plus checker descriptions and selects the relevant subset Aₓ; this reduces unnecessary checks, but routing errors remain possible.

2. **Score factual differences.** For a response pair, an LLM proposes disputed claims, generates targeted queries, obtains evidence from Serper search or parametric knowledge, then assigns each answer a 0/1 factuality signal. Only differences are queried, not every atomic claim.

3. **Verify hard constraints.** The system parses explicit length, keyword, or format constraints; an LLM writes Python checks, refines code after execution errors, and averages binary outputs. Soft semantic constraints are outside this verifier.

4. **Combine the reward.** A judger adds ArmoRM’s preference score and invoked verifier scores; the reported implementation fixes λ and both weights to 1.0. The final score ranks candidates for evaluation, best-of-n, or pair construction.

5. **Create preference pairs when training.** From UltraFeedback or 20,000 on-policy prompts with eight samples each, select the highest score as chosen and lowest as rejected, then DPO-train zephyr-7b-sft-full. Reproduction must fix checkpoints, prompts, Google/Serper availability, verifier code, and benchmark versions; some budgets and seeds are unknown.
