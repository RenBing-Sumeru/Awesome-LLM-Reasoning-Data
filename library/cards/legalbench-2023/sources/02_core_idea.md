The contribution is a collaboratively built benchmark suite for English legal reasoning. The core mechanism is community task contribution from legal and technical experts, normalization into task directories, and evaluation through task-specific prompts, labels, and metrics.

The Hugging Face data card describes 162 tasks gathered from 40 contributors, with tasks spanning statutes, judicial opinions, contracts, and other legal texts. The feedback contract is task-specific answer scoring, not a universal legal judgment: a model output is checked against a label, class, extracted field, generated answer, or entailment target.

Closest comparisons are LawBench, MMLU legal subsets, HELM/BigBench-style open evaluation efforts, and older legal NLP datasets such as ContractNLI, CUAD, MAUD, privacy-policy corpora, and CaseHOLD. The direction label is collaboratively curated legal evaluation surface.
