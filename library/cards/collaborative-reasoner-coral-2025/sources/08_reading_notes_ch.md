- **跟踪精确 search unit。** 每个 turn 从同一 prefix 采样五个 siblings，随机继续一个并保留其他 siblings；每个 problem 有五棵独立 trees，在 belief agreement 或 20 turns 后终止。

- **区分 extractor judgment 与 gold matching。** Same-family LLM 先抽取 belief 或 `not sure yet`，随后 task rule 才能与 gold 比较。Long responses 与 contexts 会造成 extraction errors，agreement 也仍可能错误。

- **把 DPO rows 读成受控 next-turn pairs。** Chosen 与 rejected siblings 共享同一个 role instruction 与 conversation prefix。Label 是 answer-level gold match，不是 procedural 或 social-quality supervision。

- **不要把 scale 与 release 混为一谈。** Table 9 的 379.6K 8B turns 与 311.3K 70B turns 是 accepted training counts。Paper-run conversations、SFT/DPO rows 与 Coral checkpoints 的 public release count 都是零。

- **审计 code-only boundary。** Single-commit repository 缺 MBPP-CR、rejects、failures、logs 与 prepared splits；paper/code pair caps 和 token lengths 不一致，semantic decontamination 未知，MIT code license 也不涵盖缺失的 synthetic data 或 models。
