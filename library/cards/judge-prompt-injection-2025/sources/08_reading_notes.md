1. Position: candidate text can manipulate an LLM judge; JudgeDeceiver makes that risk measurable through optimized suffixes.

2. Mechanism: shadow candidates plus a target-index loss matter because the real competitors and position are unknown; only the requested verdict counts as success.

3. Artifact: the authors release JudgeDeceiver code, not an official downloadable attack dataset; default optimization uses 20 tokens and 600 iterations.

4. Evidence: on Mistral-7B/MT-Bench, ASR is 90.8% and position-consistent ASR is 83.4%, versus at most 40.7% and 19.0% for manual injection.

5. Reuse: use for authorized red teaming of open judges; first lock the exact template and tokenizer, then test defenses beyond the three detectors studied.

The main unresolved decision is deployment transfer: reproduce on the production judge before using Table 1 or Table 11 rates to prioritize a mitigation.
