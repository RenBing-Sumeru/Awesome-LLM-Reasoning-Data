The paper is accepted by AAAI 2026; the author repository and dataset card are public and linked by the paper. The data card documents four QwQ-32B JSON files totaling 3,112 records, their thresholds, sources, and fields. The repository is MIT licensed and exposes the code path for outline selection, step scoring, mode routing, and context propagation.

For Qwen3-32B on AIME25, the paper reports SCALE at 71.25% accuracy and 26,643 total response tokens, versus CoT 57.50%/6,839 and InftyThink 70.00%/36,640 (Table 1). On AIME24, Qwen3-32B-SCALE reports 82.92% and 25,581 tokens versus CoT 73.33%/7,409. The authors also report a 800-pair SFT setup; Llama3.3-70B-Instruct changes from 24.58% to 63.51% on AIME24 (Table 3).

These are author-reported results under the listed prompts, models, metrics, and sampling protocol. They support performance comparisons, not calibrated difficulty labels, trace faithfulness, safe training reuse, or absence of benchmark overlap.
