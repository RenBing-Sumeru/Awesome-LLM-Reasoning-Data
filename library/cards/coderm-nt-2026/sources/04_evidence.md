**Claim.** Execution-trace reward modeling is a usable alternative to synthetic unit-test reward for code RL. **Controlled setup.** Table 1 trains Qwen3-4B-Thinking on 5,000 OpenCodeInstruct questions and compares reward sources under the reported GRPO recipe; the salient change is CodeRM-NT versus synthetic tests.

**Result.** CodeRM-NT reaches a 72.7 average pass@1 across HumanEval(+), MBPP(+), LiveCodeBench-v5, and BigCodeBench-Instruct Hard, versus 72.1 for synthetic tests; its LiveCodeBench-v5 and BigCodeBench scores are 52.1 and 22.3 versus 50.3 and 25.7. Table 3 also reports 0.963 RewardBench hep-python accuracy, versus 0.957 for AceCodeRM-7B.

**Boundary.** This supports the disclosed Python, model, data, and reward recipes, not semantic correctness of all LLM-judged traces or superiority on multi-file software work.
