The most direct construction evidence is the oracle-based verifier calibration, not the model leaderboard.

| Evidence | Reported result | What it supports |
|---|---:|---|
| Mutual verification on 64 seed problems / 3,150 tests | 96.8% output-label accuracy | Agreement can approximate oracle outputs in the sampled setting |
| Direct GPT-4o input-output generation on the same comparison | 12.7% | Decoupling input generation from output labeling matters in that ablation |
| Larger mutual-verification comparison on 1,024 problems / 27,613 tests | 92.8% | The verifier remains useful at larger scale but is not error-free |
| Three-step input generation vs direct prompting, 150K-problem 7B ablation | LiveCodeBench 44.6 vs 42.9 | Scale-aware utility execution improves this downstream training condition |

Table 1 provides a selection-yield audit: 37,754 reference-bearing seeds generate 1,565,632 candidates, of which 380,560 are retained. That roughly 76% of synthetic candidates are rejected is consistent with the appendix's warning that many generated problems are invalid or unsolvable, but the release does not expose row-level rejection reasons.

Downstream SFT results show utility under the stated protocol. On LiveCodeBench, the seed-only, synthetic-only, and combined 7B runs report 49.7, 46.8, and 57.3; the rStar-Coder 1.5B/7B/14B models report 40.1/57.3/62.5. Table 6 compares 37.7K seeds with 1, 8, or 16 solutions to the broader corpus and reports 40.8/51.1/54.7 versus 57.3 on LiveCodeBench. These comparisons support studying problem diversity, but they do not certify individual data rows or isolate all confounders.

Release evidence is more ambiguous. At pinned Hugging Face revision `3a7a0a0636ec96e3c1ec42ebe79ade467caa040d`, complete configs contain 591,660 `seed_sft`, 398,107 `synthetic_rl`, and 398,183 `synthetic_sft` rows; partially indexed testcase configs are estimated at 7,801 and 463,540 rows. These counts neither equal the 580K paper mixture nor explain why the synthetic exports exceed Table 1's 380,560 retained problems. Appendix Table 6 also says 480K unique problems instead of Table 1's 418,314. The discrepancies are release-lineage risks, not evidence of higher or lower data quality.
