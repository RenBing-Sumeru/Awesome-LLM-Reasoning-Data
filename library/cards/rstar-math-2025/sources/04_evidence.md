All figures below are author-reported or artifact-inspection results, not independent reproductions.

| Question | Condition and result | Source |
|---|---|---|
| Does iterative collection cover more of the 747K pool? | Overall solved/covered problems rise from 60.17% to 66.60%, 77.86%, and 90.25% across rounds 1-4; Olympiad-level coverage rises from 20.99% to 56.04%, 62.16%, and 80.58%. | Paper Table 2 |
| Where does policy performance change? | Qwen2.5-Math-7B System-2 scores on MATH are 75.2, 86.6, 87.0, and 89.4 across the four rounds; the largest reported jump is round 1 to round 2. | Paper Table 4 |
| Does step-verified trajectory selection outperform an answer-only selector in the authors' setup? | Round-4 step-verified SFT gives 78.4 MATH and 26.7 AIME, versus 73.4 and 13.3 for ORM-ranked rejection sampling under the reported downstream SFT comparison. | Paper Table 5 |
| Does PPM guidance outperform two alternative selectors? | PPM-MCTS reports 89.4 MATH / 50.0 AIME; direct Q-value PRM (PQM)-MCTS gives 88.2 / 46.7; ORM Best-of-N gives 82.6 / 26.7. | Paper Table 6 |
| What is the top reported test-time result? | Qwen2.5-Math-7B with ordinary reported search reaches 89.4 MATH / 50.0 AIME, and 64 trajectories reach 90.0 / 53.3. Accuracy generally saturates near 64 trajectories on several benchmarks; candidate-node gains saturate beyond 32. | Paper Table 3, Figure 3, Table 12 |
| What is actually released? | The inspected SFT revision has 1,188,842 train-only rows with `query`, `response`; the PPM revision has 1,407,399 train-only rows with `prompt`, `neg`, `pos`, `neg_count`, `pos_count`. | Official Hugging Face dataset-server schemas and counts |

These results support narrower conclusions than a general data-quality claim. Table 5 isolates the authors' step-verified trajectory selection against ORM-ranked rejection sampling under one downstream recipe, and Table 6 compares three search-guidance choices. Neither comparison measures source correctness, provenance, contamination, license compatibility, or verifier calibration. The test-time numbers also combine trained policy quality with search budget and PPM guidance.

A small author audit reports that 19 of 20 manually examined remaining-unsolved problems were incorrectly labeled (paper §3.3). The sampling frame, reviewed items, and annotations were not released, so this is suggestive evidence of answer-key noise rather than a population estimate. Exact reproduction of the tables is further limited by missing checkpoints and paper-matched configs.
