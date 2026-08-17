All model scores are author-reported; release counts come from inspected official artifacts.

| Question | Condition and result | Source |
|---|---|---|
| How selective is the pipeline? | 59,029 source questions become 54,116 successful traces, 51,581 format-clean traces, 24,496 questions unsolved by both Qwen probes, and 1,000 final examples. | Paper §2.2 |
| Are final teacher outputs mostly correct? | Claude 3.7 judges 53.6% of the 1,000 s1K generations correct. | Paper §2.2 and Limitations |
| Does selected 1K match the full-pool ablation? | Under an approximately 30K maximum thinking budget, s1K scores 50.0/93.0/57.6 on AIME24/MATH500/GPQA Diamond; the full-pool run scores 53.3/92.8/58.1. | Paper Table 2 |
| How do simpler 1K selectors compare? | Random: 36.7/90.6/52.0; diversity-only: 26.7/91.2/54.6; longest-only: 33.3/90.4/59.6 on the same three tasks and budgeted setting. | Paper Table 2 |
| What is the compute difference? | Main s1K SFT costs about 7 H100 GPU-hours; the full-pool ablation costs 394 H100 GPU-hours. | Paper §5.1, Table 2 |
| What does budget forcing change? | Original s1-32B rises from 50.0% AIME24 without intervention to 56.7% when `Wait` is forced four times. | Paper Tables 1 and 4 |
| Is the public full pool count-identical? | No. `data_ablation_full59K` has 58,986 rows, while the paper/raw/feature pool has 59,029; 43 rows are unexplained. | Official Hub revisions and paper Table 6 |

Table 2 supports the paper's claim that its selection recipe is far more compute-efficient than training on the whole available pool under the tested model and budget. It does not establish that 1,000 is universally optimal: the full-pool scores are slightly higher on AIME24 and GPQA, lower on MATH500, and the paper reports no statistically resolved overall gain.

The 53.6% correctness audit is a critical negative result. It means s1K is not a correctness-filtered solution set; its training value may come from trace structure, hard questions, or partial reasoning even when the final response is wrong. This cannot be generalized into evidence that incorrect traces are safe or useful for other models.

Budget-forcing gains concern the trained model's inference policy, not s1K quality. Scores can vary with vLLM batch size, continuation, and tensor parallelism even under greedy decoding. More forced tokens also produce loops and saturation, so the reported positive slope has a bounded regime.
