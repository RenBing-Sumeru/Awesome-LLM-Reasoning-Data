The strongest evidence concerns which construction choices helped under the paper's student-training protocol, including several negative or scale-dependent results.

| Experiment | Condition and reported result | What it supports |
|---|---|---|
| Code-source mixing | Top two sources average **41.3** versus **36.4** for the top sixteen sources (Table 4) | Adding more sources can dilute utility for this student/evaluation mixture |
| Teacher choice | QwQ-32B gives **44.2** average for both code- and math-source ablations; DeepSeek-R1 gives **42.3** and **41.6**, respectively (Table 8) | Teacher benchmark reputation is not a sufficient proxy for student-data utility |
| Math answer filtering | No filtering gives **41.9** average; GPT verification gives **40.0** (Table 7) | The tested judge filter did not beat retaining all successful answers |
| Verification by teacher scale | On OpenThoughts-114K, verified 32B data gives **64.5** versus **62.1** unverified, while verified 7B data gives **41.9** versus **45.0** unverified (Appendix H.1.1, Table 15) | Verification effects change with generator scale |
| LLM-generated unit-test filtering | On matched 16k code subsets, verified data scores **36.0 / 9.4 / 10.4** on LCB / CodeElo / CodeForces; random unfiltered data scores **38.5 / 10.7 / 13.54** (Appendix H.1.4, Table 18) | This tested code filter can reject useful material or fail to identify better supervision |
| Decontamination diagnostic | Among 3,092 constructed contaminated and 3,000 clean prompts, the final detector misses **12** contaminated and rejects **42** clean items (Appendix F, Figure 7) | The lexical detector has measured false negatives and false positives even on its designed testbed |

The no-filter conclusion has a major qualification: the Table 7 math no-filter condition uses 63,200 examples rather than 31,600 and is explicitly not compute-controlled. It therefore does not establish that answer verification is universally harmful or useless. The OpenThoughts-114K and unit-test results are more informative as negative evidence about specific verifier/data-scale combinations.

After scaling the selected recipe, the paper reports OpenThinker3-7B scores of 69.0 on AIME24, 53.3 on AIME25, 93.5 on AMC23, 90.0 on MATH500, 42.7 on HMMT 02/25, 51.7 on held-out LiveCodeBench 06/24-01/25, 31.0 on CodeElo, 32.2 on CodeForces, 53.7 on GPQA-D, and 72.4 on JEEBench (Table 1). These are author-reported checkpoint results and were not independently reproduced.

Those scores show that the full source/filter/teacher/scale/training package can produce a competitive student under the paper's evaluation setup. They do **not** isolate each released row's contribution and do not certify answer correctness, trace faithfulness, source rights, provenance completeness, decontamination completeness, or security hygiene. Artifact availability and benchmark performance are narrower claims than data quality.

Release inspection supplies a separate evidence layer: the public HF artifact has exactly 1,200,000 rows, one train split, 120 Parquet shards, and the four-field schema described above. The repository and model are public. No independent reproduction, immutable final-run manifest, per-row verifier audit, or rejected-sample ledger was found in the confirmed official artifacts.
