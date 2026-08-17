The paper's reconstructable construction path is:

1. **Collect seeds.** Aggregate 57,215 expert-written problems, reference solutions, and available tests from seven named dataset families and competition archives. IOI PDFs are converted with Mathpix.
2. **Normalize and filter.** Remove cross-source duplicates and items without reference solutions, leaving 37,754 seeds. The exact normalization, duplicate keys, and item-level removal log are not published.
3. **Synthesize problems.** Give GPT-4o a seed question plus its reference solution and ask for a transformed problem grounded in the same reasoning knowledge. This yields 1,565,632 candidates before verification.
4. **Write test utilities.** Ask GPT-4o, and in Appendix A.2 also DeepSeek-V3, for `generate_test_input` and `validate_test_input`; prompts permit CYaRon. Instantiate scale parameters from small integers and powers of ten, execute both utilities, and retain inputs the validator accepts.
5. **Label outputs.** Run the seed oracle for seed problems. For each synthetic problem, sample 16 QWQ-32B long-reasoning solutions, execute them on at least 50 shared inputs, and derive accepted outputs from cross-solution agreement.
6. **Select problems and traces.** Normally reject a synthetic problem below 60% agreement; use 40% for Codeforces-derived items rated above 1600. From 2.25M synthetic long-CoT solutions, retain the fastest passing solution per retained problem. For seed questions, retain test-passing QWQ-32B solutions, but keep all candidates when none passes.
7. **Decontaminate.** Remove 16-gram problem-statement overlaps with HumanEval, HumanEval+, MBPP, MBPP+, LiveCodeBench, and USACO 2025. The final paper reports 418K problems and 580K question-solution pairs.
8. **Train and export.** Run answer-level SFT on Qwen2.5-Coder-Instruct 1.5B, 7B, and 14B. The public release exposes separate seed/synthetic SFT, RL-problem, and testcase configurations rather than a frozen paper-training manifest.

The supplemental code clarifies several implementation choices but is not a complete reproduction package. Its scale enumeration reaches 10^6, its mutual verifier differs from the prose as described above, and its LLM helper is a stub. A missing `cyaron_docs.md` and an undeclared `batch_size` CLI argument block the documented synthesis path without repair.

Execution should be treated as hostile-code processing. The release uses `exec` for generated utilities and function-based solutions; standard-input solutions use a subprocess with a 16-second timeout and nominal 512 MB limit, but the controls are Linux-specific and do not form a hardened containment boundary.
