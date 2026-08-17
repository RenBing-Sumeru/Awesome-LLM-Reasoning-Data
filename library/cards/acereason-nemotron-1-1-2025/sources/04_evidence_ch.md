发布证据具体，但比训练主张更窄。官方 AceReason-1.1-SFT 页面报告 3,970,332 行数据：2,668,741 个数学样本与 1,301,591 个代码样本。viewer 只公开一个训练 split，包含四个字符串字段（`category`、`source`、`input`、`output`）；数据卡称所有 output 由 DeepSeek-R1 生成，许可证为 CC BY 4.0。AceReason-Math 另行公开 49,585 行 `problem`/`answer`，同样只有一个训练 split，并采用 CC BY 4.0。两项 artifact 都不含 rollout 组、reward log、阶段归属或代码 RL 测试。

SFT 扩展实验中，v1 包含 1.8 万个数学和 1.8 万个代码样本，v7 包含 120 万个数学和 100 万个代码样本。从 v3 到 v4，扩展唯一 prompt 并增加 1.6 万个数学样本，与 AIME24 提高 4 个百分点、AIME25 提高 2 个百分点相关。在 prompt 集合相近但每个 prompt 有更多 response 的条件下，v7 将 AIME25 从 v6 的 41.3 提高到 49.3。模型约在第 5–6 个 epoch 前持续改善。这些是作者设置下的七组混合实验；它们没有隔离教师质量，不能保证等同于公开发布物，也不能证明数据质量。（论文 §4.4，图 4–6。）

相对作者自己的 SFT-7B 起点，表 1 报告最终模型在 AIME24 上从 62.0 到 72.6，AIME25 从 48.4 到 64.8，LiveCodeBench v5 从 48.8 到 57.2，v6 从 43.8 到 52.1，采用论文的 avg@n 协议与默认 32K 推理上限。+10.6、+16.4、+8.4 和 +8.3 个百分点的变化证明了所报告管线下的性能，却不能识别是哪一行数据、哪次 verifier 决策或哪项 optimizer 选择导致增益。

消融提供了更有区分力的证据。在 Math Stage-2，训练 temperature 0.85 在 AIME24/AIME25/LCB v5/LCB v6 上得到 67.6/56.8/52.1/47.1；temperature 0.6 为 64.6/52.4/50.1/45.6，temperature 1.0 为 65.3/56.7/51.6/45.7。作者据此提出 entropy 约为 0.3 的经验规则，而非普遍最优值。跳过 8K Stage-1 后，Stage-2 的 AIME25 停在 51.8，而保留 Stage-1 时为 56.7，尽管 Stage-1 先把 AIME25 从 48.4 降至 44.6；所谓 reasoning compression 是作者假说。在最终 32K 数学 Stage-4，32K 评测上不使用 overlong filtering 优于使用过滤：AIME24 为 71.4 对 70.2，AIME25 为 63.5 对 62.3，LCB v5 为 53.5 对 52.0，v6 为 48.0 对 45.1。（论文 §4.5.2–4.5.5，图 8–10，表 2–3。）

论文还报告：AIME25 的 RL 增益从 pass@8 的 8.3 个百分点缩小到 pass@128 的 1.2，而 LiveCodeBench v6 在 pass@128 仍保留 5 个百分点增益。附录 C 为每个 AIME 条目生成 256 个 output，为每个 LiveCodeBench 条目生成 128 个 output，并对每个 k 重采样 100 次。这个预算敏感结果是采样行为证据，不是发布完整性或 verifier 正确性的证据。已核查来源未报告独立复现。
