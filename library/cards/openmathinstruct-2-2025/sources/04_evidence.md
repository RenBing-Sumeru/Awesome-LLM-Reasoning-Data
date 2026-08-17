The paper's ablations support specific construction choices under a Llama-3.1-based student-training protocol; they should not be converted into universal data-quality rules.

| Experiment | Condition and reported result | Supported interpretation |
|---|---|---|
| Solution format | OpenMath CoT averages 237.0 tokens and **44.5 ± 0.8** MATH validation accuracy; Llama CoT averages 331.3 tokens and **40.6 ± 0.6** (Table 1) | More verbose instruction formatting can hurt this SFT setup |
| Teacher strength | At matched coverage, 405B-Instruct teacher data reaches **37.9 ± 0.6** MATH validation versus **30.1 ± 0.6** for Llama-3.1-8B-Base teacher data (Table 2) | Strong off-policy teacher data can outperform weak on-policy generation |
| Quality/reasoning filters | 405B binary-judge and Nemotron-4-340B-Reward filters remove about 6%–12% but do not materially improve SFT accuracy (Table 3; Appendix B) | The tested filters do not justify their rejection cost under these conditions |
| Deliberate answer noise | At 256K examples and above, up to 20% deliberately incorrect data produces little or no reported degradation (Figure 5) | Larger SFT mixtures can tolerate some final-answer noise; this is not proof that arbitrary reasoning errors are safe |
| Question diversity | Holding 256K pairs fixed, increasing unique questions from 1K to 6.5K improves MATH validation by **10.5 points** (Figure 6) | Unique task coverage matters independently of pair count |
| Majority threshold | Thresholds 0, 8, 16, and 24 are compared; the authors select **0** (Appendix C.1, Table 9) | Requiring stronger surface consensus did not help the tested student, but retained rows can have weak agreement |

The paper also directly documents a feedback failure. Some solutions contain incorrect intermediate steps yet reach the correct final answer. Manual inspection of 20 flagged examples estimated that about 60% were indeed incorrect. This supports the answer-level classification and shows why final-answer matching or majority proxies cannot be relabeled as process supervision.

For the final models, OpenMath2-Llama3.1-8B trained on the full release reports 91.7 on GSM8K, 67.8 on MATH, 16/40 on AMC 2023, 3/30 on AIME 2024, and 22.0 on Omni-MATH (Table 4). The MATH result is 15.9 points above Llama-3.1-8B-Instruct's 51.9. OpenMath2-Llama3.1-70B trained on the 5M subset reports 71.9 on MATH but improves only a subset of benchmarks; the authors hypothesize that decisions tuned on the 8B validation setup may not transfer to 70B.

These model results are author-reported and were not independently reproduced for this Card. They demonstrate behavior of a complete data/training/evaluation package, not row-level correctness, rationale validity, contamination absence, or license completeness.

Decontamination evidence is also bounded. The original filter removes about 50K of 569K MATH-derived synthetic questions against four named test sets. Omni-MATH was released after training and was not included; the authors later found about **1.4%** of Omni-MATH test questions in the training data. This is direct evidence that a substantive filter can still leave benchmark-specific overlap outside its original scope.

Release evidence is exact where the paper is rounded: the pinned HF card and dataset-server manifest both report 13,972,791 train rows, with 1M/2M/5M overlapping downsampled subsets. The paper reports 607.3K unique questions as a rounded Table 5 total; no exact integer unique-question manifest is public.
