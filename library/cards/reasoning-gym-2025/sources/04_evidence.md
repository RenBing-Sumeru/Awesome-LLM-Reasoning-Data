The strongest evidence is about downstream behavior under specified training and evaluation setups, not about universal data or verifier quality.

| Condition | Metric and comparison | Reported result | Interpretation boundary |
| --- | --- | --- | --- |
| Intra-domain GRPO on Qwen2.5-3B-Instruct; three runs; identical 50-problem held-out-task sets | Acc@3, base vs RG-RLVR | Algebra 5.0→16.7; algorithmic 52.3→59.7; arithmetic 89.7→96.0; cognition 40.3→42.3; games 0.0→3.3 | All five tested categories improve, but Games remains 3.3 (Table 1). |
| Cross-domain GRPO on the same base model | Acc@3 | Algorithmic training changes algebra 23.83→52.89 and geometry 0.83→23.17, but ARC 6.49→4.18 | Transfer is heterogeneous; the ARC result is a negative result (Table 2). |
| RG-Math, Qwen2.5-3B-Instruct trained 800 GRPO steps | External benchmark score | GSM8K 76.2±1.17→76.7±1.16; MATH 48.5±0.68→58.2±0.66; Big-Bench Hard 8.68±0.30→16.34±0.40 | The GSM8K change is marginal relative to its standard error; MATH and BBH changes are larger (Table 3). |
| RG-Algorithmic and RG-Math on MMLU-Pro categories | Accuracy | RG-Algorithmic changes Math 54.63→53.89, while RG-Math changes Math 54.63→60.25; both improve several other categories | Algorithmic training does not improve every external category (Table 4). |
| Curriculum vs uniform sampling, Qwen2.5-3B-Instruct | Accuracy at fixed difficulty | Spell Backwards length 4: 30.00→70.67; Mini Sudoku 8–10 empty cells: 6.67→20.00; Count Primes 100–500: 4.00→30.67 | Curriculum wins all reported cells, yet Count Primes never advances beyond its initial level and paths may be hard to formalize (Table 5, Figure 6). |

The zero-shot study supplies an evaluation-surface result: on hard configurations, o3-mini averages 63.51%, DeepSeek-R1 59.52%, and the best listed non-reasoning model, Llama 4 Maverick, 41.50%. Increasing difficulty produces large category drops, including code drops of 71.93 points for o3-mini and 61.82 for DeepSeek-R1 (Figure 3). These numbers show that configured difficulty changes model behavior; they do not prove that the hard settings are equally calibrated across tasks.

The reward curves need a specific caution. The paper states that training reward is accuracy plus an auxiliary formatting component and attributes early spikes partly to learning that format; evaluation tables remove the auxiliary term and report accuracy only (Paper §4, Figures 4–5). Reward-curve gains therefore cannot be read directly as correctness gains.

All model results are author-reported and were not independently reproduced for this Card. The authors disclose roughly 1,500 A6000 GPU-hours. No experiment measures task-level verifier false-positive/false-negative rates, semantic contamination, reward calibration across tasks, or the correctness of every generator. Those missing audits prevent treating benchmark improvement as proof of data quality.
