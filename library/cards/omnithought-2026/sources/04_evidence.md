The artifact evidence is unusually concrete at the schema level. The pinned official README declares 708,009 `train` rows and 135 Parquet shards; each outer row contains a question and a list of reasoning records. The paper reports more than two million nested CoTs. Hugging Face's datasets-server currently marks its processing as partial, with only 47,277 counted rows and a 552,229-row estimate; that partial estimate must not replace the release metadata, while the exact nested total still requires a full-snapshot count.

The matched 10K-problem selection study in Table 2 separates several policies:

| SFT trace selection | AIME2024 | MATH500 | GPQA-Diamond | LiveCodeBench V2 | Average |
|---|---:|---:|---:|---:|---:|
| Random | 16.67 | 80.6 | 36.36 | 31.31 | 41.24 |
| RV optimal | 26.67 | 83.2 | 40.40 | 34.44 | 46.18 |
| CD optimal | 33.33 | 83.8 | 39.90 | 36.10 | 48.28 |
| Combined | 36.67 | 84.4 | 40.91 | 36.59 | 49.64 |

Because the problems and SFT configuration are held fixed, this supports a selection effect within that study. It does not prove that the scores are universally calibrated or that every selected trace is logically valid.

The DPO experiment uses 10K verbosity pairs. It leaves AIME2024 unchanged at 36.67, raises MATH500 from 84.4 to 86.2, GPQA-Diamond from 40.91 to 42.93, and LiveCodeBench V2 from 36.59 to 39.9, while reducing average output tokens on all four benchmarks. This is evidence for shaping output verbosity under the paper's pairing rule, not for learning human correctness preferences.

Table 4 provides an RL ablation without prior CoT SFT on Qwen2.5-7B-Instruct. Vanilla GRPO reports MATH500/AIME2024 of 78.8/13.3; adding RV gives 79.0/16.7, CD gives 80.8/20.0, and both give 81.4/23.3. The raw model is 73.6/10.0. These results support the reported reward additions in that setup, but the missing reward weights, rollout policy, and verifier implementation prevent exact attribution or reproduction.

Capacity-conditioned selection is model-dependent as claimed: Table 7 reports the best average at `mu_CD=5` for Qwen2.5-7B-Instruct (63.4 versus 55.5 on the full dataset) and at `mu_CD=7` for Qwen2.5-32B-Instruct (77.6 versus 72.8). The 10K-CoT judge audit reports QwQ-32B mean absolute differences from human ratings of 1.22 for RV and 1.17 for CD; differences from DeepSeek-R1 and DeepSeek-R1-0528 are also below 2. This is a limited consistency check, not exact agreement or comprehensive calibration. None of the benchmark results alone proves data correctness, provenance quality, decontamination, or reuse safety.
