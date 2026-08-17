1. Position: a Qwen RLVR gain can be shortcut retrieval, not new reasoning; compare leakage and clean controls before making a capability claim.

2. Lever: select wrong-to-right cases, then combine perplexity, Path Patching, JSD, Logit Lens, and NDEs; the Anchor signal is localized to L18–20.

3. Artifact: the authors release analysis code only. Training/data preparation delegates to Spurious Rewards, and extra OLMo/LLaMA/Qwen3 checkpoints are not public.

4. Evidence: gated suppression fires on 79/128 MATH-500 leakage cases and changes accuracy 100.0%→85.16%; it fires on neither AIME-2025 nor LiveMathBench controls.

5. Reuse: audit suspicious checkpoints offline; verify fresh controls, the gate’s false positives, and non-leakage behavior before labelling a success contaminated.
