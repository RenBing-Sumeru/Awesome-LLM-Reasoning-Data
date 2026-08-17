SiriuS does not introduce supervised fine-tuning, terminal-reward filtering, Actor-Critic feedback, or bootstrapped reasoning in isolation. STaR already iterates on successful single-agent rationales; CoMM/COMM supplies a prompted multi-agent collaboration baseline; TextGrad optimizes prompts through natural-language feedback; DSPy/MIPROv2 searches instructions and demonstrations. The paper's distinctive object is the **role-specific experience-library lifecycle** that combines terminal selection with one-role repair and downstream replay.

Relative to STaR, SiriuS converts a joint interaction into multiple conditioned targets rather than one reasoning trace. Relative to CoMM, it learns separate role policies rather than relying only on prompt-time collaboration. Relative to TextGrad and DSPy, it trains weights from retained outputs rather than optimizing the prompts or demonstrations. These are meaningful design differences, but they prevent a clean attribution of reported performance gains to data selection alone.

The failure-repair boundary is also narrower than “learn from failures.” An external critic uses the correct answer, one selected role is regenerated, correction references are rephrased away, successors are rerun, and only a terminally correct repair enters SFT. This preserves a success-only training library while expanding coverage, but erases some failure provenance and leaves the system-level credit heuristic intact.

The strongest novelty claim for this track is therefore procedural: SiriuS specifies how to turn heterogeneous terminal signals into per-role SFT records across collaborative QA, learned-judgment Actor-Critic, and utility-based games. It does not supply verified step labels, a causal credit assignment algorithm, an open trajectory corpus, or a new optimizer.

Executable reuse should be gated by concrete checks:

1. Pin the final-paper artifact, repository SHA, provider model IDs, prompts, upstream dataset revisions, and custom split row IDs; do not mix the supplement and evolving repository silently.
2. Assert the direct-success rule by reconstructing each role input from the task and exact predecessor messages, then verify that every retained record maps to one terminally successful source episode.
3. Assert the repair rule by retaining the original failure, selected-role index, critic feedback, regenerated/rephrased response, successor replay, parser output, and final result; reject any repair that does not restore correctness.
4. Count case episodes and role records separately, publish per-role/per-iteration cardinalities, and verify that the reported 1,890 QA cases are not mislabeled as SFT rows.
5. Unit-test answer parsers with formatting variants and audit learned Judgment false acceptance/rejection before those decisions affect the library.
6. Preserve unrepaired failures and correction provenance in an audit ledger even if they are excluded from SFT; report retries, selection bias, deduplication, and seeds.
7. Verify licenses independently for code, each upstream source, derived trajectories, and fine-tuned models; the repository's MIT software license alone is insufficient.
8. Compare against Single-Agent, STaR, CoMM, TextGrad, and DSPy under matched tasks, backbone versions, inference budgets, and training access. Benchmark performance is an outcome measure, not proof that retained intermediate reasoning is correct.

None of these checks can be completed from the public five-row input sample alone. A reusable implementation must first release or regenerate the missing experience libraries and their lineage.
