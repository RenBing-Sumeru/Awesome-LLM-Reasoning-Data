**Agreement 不是 correctness。** Reward 偏好最常见的 Math-Verify equivalence cluster。Unanimous wrong answer 仍可获得 full reward，论文中 repeated-final-answer-0 case 已直接证明。Difficulty window 会从训练中移除 unanimous groups，但 moderate-sized wrong cluster 仍可能被接纳。Majority-at-16 也没有持续上升，因此 benchmark gains 不能被当作 self-reward 是 correctness verifier 的证据。

**Verifier 行为只得到部分审计。** Math-Verify 比 string matching 更能归一化数学等价形式，但 extraction 或 grading exceptions 会被捕获并静默视为 non-equivalence，这可能拆散正确 cluster。公开 run-local files 不保留 extracted answers、pairwise equivalence matrices、exceptions、selected cluster 或 binary rewards，因此无法测量报告运行中的 verifier error rates。

**Paper 与 code 不一致。** Appendix C.4 规定 1:3 seed/generated few-shot ratio，代码在八示例 context 中却最多使用两个 generated examples，反转了预期比例。论文的 shortest-answer tie-break 没有实现；代码选择第一个 maximum。LLaMA 与 Qwen templates 在 micro-batches、initial KL，以及每 iteration 2,000 对 7,500 instructions 上也与论文表格漂移。没有 tagged paper-run config 解决这些差异。

**静态 snapshots 无法重建 online curriculum。** 最显眼的 bundled generated file 有 7,532 rows、4,730 个 unique normalized prompts 与 2,802 条 exact duplicates。文件名写 iteration 4，而主论文只报告三个 iterations。Mixed file 缺少 row-level provenance。没有 manifest 将这些文件与 model checkpoint、filter state、experiment 或 reported metric 连接。

**关键 RL data 缺失。** 发布物没有完整 accepted/rejected questions、全部 16 responses、extracted answers、equivalence structures、rewards、filter reasons、verifier failures、expired groups、RNG states、training logs、official checkpoints、checkpoint hashes 或 paper-run manifests。代码可以生成新运行，但不能重建论文报告的运行。

**Contamination 与 licensing 未解决。** 论文未报告 semantic overlap scan 或 upstream pretraining audit。对已检查 snapshots 做 narrow exact-string comparison 不等于 semantic decontamination。Repository code 是 Apache-2.0，但 bundled MATH-derived/generated data 没有单独 dataset card，也没有 dataset-specific/per-component license statement。

**统计与领域限制仍在。** 论文只使用一个 fixed random seed，没有 error bars 或独立 RL reruns。增益主要集中在 math/STEM，MMLU-Pro 上较小。Medical extension 说明 recipe 可迁移，不等于已具备安全临床应用条件；self-generated curricula 可能放大 seed bias，作者也指出 explainability 与 high-impact deployment risks。

**Release versioning 可变。** 审计的 default-branch commit 为 `f8a4f86a797b9a91b22ce53b1fdc7fea4c225693`，日期 2026-01-24，包含 post-paper additions。没有 immutable tag 或 GitHub Release，也没有与论文绑定的 official checkpoint collection 或 public run-log collection。
