1. The release is three stage files with 2,261,687, 1,634,573, and 1,661,094 rows, not one deduplicated 5.56M-example corpus.
2. Math answers come from Qwen2.5-Math-72B-Instruct, while GPT-4o-mini creates other responses and cross-checks selected math answers.
3. About one million retained synthetic prompts use in-breadth and in-depth evolution; a noisy constraint-adding branch is excluded.
4. Removing all synthetic data and adding low-quality synthetic data both reduce the same 7B consumer's seven-task average.
5. Reuse requires per-row provenance, independent answer audits, decontamination refresh, and review of non-commercial and provider terms.
