- **Track the exact search unit.** Each turn samples five same-prefix siblings, randomly continues one, and retains siblings; each problem gets five independent trees, with termination on belief agreement or after 20 turns.

- **Separate extractor judgment from gold matching.** A same-family LLM first extracts a belief or `not sure yet`; only then can a task rule compare with gold. Long responses and contexts cause extraction errors, and agreement can still be wrong.

- **Read DPO rows as controlled next-turn pairs.** Chosen and rejected siblings share the same role instruction and conversation prefix. The label is answer-level gold match, not procedural or social-quality supervision.

- **Do not confuse scale with release.** Table 9’s 379.6K 8B turns and 311.3K 70B turns are accepted training counts. Public release counts are zero for paper-run conversations, SFT/DPO rows, and Coral checkpoints.

- **Audit the code-only boundary.** The one-commit repository omits MBPP-CR, rejects, failures, logs, and prepared splits; paper/code caps and token lengths differ, semantic decontamination is unknown, and MIT code licensing does not license absent synthetic data or models.
