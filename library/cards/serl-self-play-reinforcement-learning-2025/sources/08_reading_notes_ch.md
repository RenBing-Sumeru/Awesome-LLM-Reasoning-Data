- **从精确 online object 开始。** 一个可训练 group 包含 generated question、16 个完整 responses、extracted answers、Math-Verify equivalence relations、selected majority cluster、16 个 binary rewards，以及 iteration/policy state。公开 prompt snapshots 并不是这个完整对象。

- **不要把 consensus 等同于 correctness。** 使用 reward 前先读 Section 4.3 与 Appendix E：反复出现的错误答案 0 可以获得 unanimous reward；`[0.2, 0.8]` filter 只移除极端 consensus，不能移除 moderate-sized wrong majorities。

- **逐行比较 paper 与 code。** Appendix C.4 的目标是两个 seed 加六个 generated few-shot examples；代码却最多使用两个 generated，其余八示例 context 由 seed 填充。论文的 shortest-answer tie-break 未实现，template micro-batches、KL 与 2,000-instruction iteration size 也和表格漂移。

- **把 bundled data 视为未绑定 snapshots。** `llama_gen7500_iter4.jsonl` 有 7,532 rows、4,730 个 unique normalized prompts 与 2,802 条 exact duplicates，而其 iteration-4 文件名无法对应论文报告的三个 iterations。没有 manifest 将静态文件绑定到 checkpoints、filters 或 metrics。

- **保留 release boundary。** Code 是 Apache-2.0，但 bundled datasets 没有 dataset-specific license；semantic decontamination 为 unknown。完整 responses、rewards、failures、verifier exceptions、accepted/rejected streams、public logs、official checkpoints 与 paper-run manifests 均不可用。
