All performance numbers are author-reported; artifact counts come from the pinned official release.

| Question | Condition and result | Source |
|---|---|---|
| Did the system win AIMO-2? | The reported submission solved 34 of 50 private-test problems under the competition constraints. | Paper §§1 and 6; NVIDIA competition account |
| How does the paper's problem count evolve? | 620K forum discussions → 580K extracted problems → 550K after unsuitable-problem removal → 540K after LLM decontamination. | Paper Table 1, §2.1 |
| What does the official release correct? | The 540K figure was measured too early. Released solution data corresponds to 306K unique solution-bearing problems, plus 193,170 additional problem-only rows. | Official dataset-card count-reconciliation note |
| What rows are in the pinned release? | `cot`: 3,201,061; `tir`: 1,718,466; `genselect`: 565,620; `additional_problems`: 193,170; total: 5,678,317. | Official Hugging Face datasets-server at revision `d3d0866...` |
| What is the CoT generation yield? | 5.2M candidates—1.0M QwQ and 4.2M DeepSeek-R1—become 3.2M retained solutions: 0.5M and 2.7M respectively. | Paper Table 5, §2.3 |
| What is the staged TIR yield? | 1.2M LIMO-Qwen-32B attempts become a 15K stage-0 set; a tuned QwQ-32B produces 700K attempts and 260K remain after wrong/no-code removal; later generation yields about 1.7M released TIR rows. | Paper §§3.1-3.3 |
| What is the GenSelect yield? | QwQ-32B labels 1M selection traces; correctness filtering retains about 565K, matching the pinned split count of 565,620. | Paper §4.2, Table 6; official release |

The 34/50 competition result and the paper's benchmark tables show the behavior of trained models and inference scaffolds, not the correctness or provenance of every dataset row. The key data evidence is instead the documented generation/filter funnel, public schema, split counts, and official count correction.

Several negative results constrain interpretation. Novelty/significance filtering is disabled after stage 0 because it hurts later downstream performance. Qwen2.5-32B-Instruct summarization of GenSelect comparisons makes models roughly 1-2 percentage points worse. A pipeline bug loses 137K proof questions; NVIDIA says recovered data regressed SFT and conditions a future solution release on finding improvements. The paper also reports weaker-than-expected transfer to smaller models, public-leaderboard variance, and final outputs roughly 10% longer, which harmed competition time allocation.

Appendix examples show that a TIR program's output can conflict with the prose conclusion and that a search result can fail to support a claimed unique answer even after novelty/significance filtering. These are direct warnings that mode-specific filters and final-answer acceptance do not certify semantic consistency.
