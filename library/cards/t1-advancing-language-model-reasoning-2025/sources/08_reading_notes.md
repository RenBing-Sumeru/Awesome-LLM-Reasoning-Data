- Read §3.1 and Appendix A together: the important data transformation is attempts + label-grounded critique/verification → merged chain, not simply “synthetic CoT.”
- Read §3.2 with Appendix B: K=64, RLOO, high temperature, entropy, normalized KL, and the -1 bad-response penalty jointly define the reported RL behavior.
- Table 2 is the guardrail against a simplistic “higher temperature is better” reading; its evidence is a finite sweep in one reported setting.
- Table 3 is the guardrail against treating length control as cosmetic: the penalty changes both overlong ratio and reported accuracy, but its detector is not auditable from the release.
- Read Figure 6 separately from RL results. Prefix truncation/summarization is an analysis of a generated response, not evidence that the dataset supplies a search tree or a generally valid test-time strategy.

Easy misreadings: the public `rl-data.jsonl` filename does not by itself contradict or resolve the README's “coming soon” statement; inspect its schema and release documentation. Likewise, a 92.4 MATH500 result is not a data-license, provenance, or contamination certificate. Pair this card with a step-verifier/process-reward card when deciding whether intermediate correctness—not just answer correctness—is needed.
