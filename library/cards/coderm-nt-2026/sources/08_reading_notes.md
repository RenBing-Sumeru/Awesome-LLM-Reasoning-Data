1. **Positioning.** CodeRM-NT replaces synthetic unit-test rewards with an LLM judgment of executed Python-code traces.
2. **Mechanism.** UCT search expands code prefixes; inserted prints and sample calls expose state, and the judge's 0–1 score is back-propagated into node rewards.
3. **Artifact.** The repository releases MCTS, reward-training, and RL code plus a model; the paper reports 196,098 scalar responses and 71,205 pairs, not a separately named downloadable reward dataset.
4. **Evidence anchor.** With Qwen3-4B-Thinking and 5,000 OpenCodeInstruct questions, Table 1 reports 72.7 average pass@1 versus 72.1 for synthetic tests; Table 3 reports 0.963 hep-python reward accuracy.
5. **Reuse decision.** It suits audited Python reward learning without tests; first measure LLM-judge error on independently checked programs and keep execution sandboxed.
