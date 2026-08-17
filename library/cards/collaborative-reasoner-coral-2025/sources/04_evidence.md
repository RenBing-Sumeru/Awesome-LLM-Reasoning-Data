The initial evaluation establishes the collaboration problem rather than data quality. Across the reported model/task combinations, agents frequently agree even when wrong; agreement rates range from 74.3% to 99.3%, while assertive turns average only 0.2%–5.5%. Several models perform worse in collaborative mode than single-agent chain-of-thought, showing that additional dialogue and compute do not automatically improve reasoning.

After self-training, the paper reports that Collaborative Reasoner models consistently outperform fine-tuned chain-of-thought variants of the same base, with gains up to **16.7 percentage points absolute**. Human evaluation on 100 paired MMLU-Pro conversations, with three annotators per pair, finds more effective disagreement and more natural conversations after training. These are system-level results under the paper setup; they do not establish that every accepted turn is a good collaborative move or that the unreleased data can be independently audited.

The construction evidence is concrete about accepted scale. Table 9 reports:

| Model | MBPP-CR | MATH | MMLU-Pro | ExploreToM | Total accepted turns |
|---|---:|---:|---:|---:|---:|
| Llama-3.1-8B | 33.8K | 85.1K | 160.6K | 100.1K | **379.6K** |
| Llama-3.1-70B | 33.3K | 88.5K | 99.8K | 89.7K | **311.3K** |

These totals describe turns retained for training, not released examples. No corresponding conversation or SFT/DPO files are public, and counts for Qwen-2.5-7B-Instruct and Ministral-8B-Instruct are not disclosed.

The strongest evidence for the feedback boundary is Appendix A. Belief extraction can fail on long reasoning responses and lengthy contexts. Binary correctness also treats a turn that advances the solution without stating a final correct answer as negative. Thus gold match is reliable only after the judge has extracted the intended belief, and the resulting label measures answer disclosure rather than the procedural quality of the conversation.

Agreement correctness is stricter than agreement: both agents may terminate on an identical wrong belief. Tracking gold detects this for evaluation, but stopping on agreement still truncates the interaction. The paper also observes continuing over-agreement, excessive politeness, and verbosity; its reported training filter does not directly optimize those social metrics.

The official supplemental and one-commit repository provide code evidence, not a data release. They contain generation, belief extraction, evaluation, filtering, DPO/SFT, and Matrix code but no conversation corpus, selected rows, reject population, checkpoints, or logs. A benchmark result therefore cannot be used as proof of conversation provenance, label accuracy, release completeness, or reusability.
