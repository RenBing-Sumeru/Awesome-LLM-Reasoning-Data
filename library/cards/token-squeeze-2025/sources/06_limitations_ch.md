**反馈限制。** merged_verify 只判断抽取后的最终答案。它可能拒绝格式不同但等价的答案、接受“答案正确但推理无效”的响应，或被格式投机利用；normalization 和错误率不可得。KL gate 使用一条采样 continuation，截断到未来 512 个 token（附录 B）。通过它不能证明 rewrite 保留全部后续推理、事实或 faithfulness。这些是从明确反馈契约得出的 curator inference。

**选择/目标限制。** p 是依赖 checkpoint 和采样策略的难度代理，不是外部标签。pair 混合正确性、长度与候选可得性。论文报告，把更长正确轨迹当作负例会降低准确率，极端 alpha 会恶化权衡，说明其对 pair construction 敏感（论文 §4.3.1）。作者称 epsilon 由启发式选择：低值限制压缩，高值允许语义漂移（论文 §5）。

**发布/审计限制。** 代码加一个输入 JSONL 使配方部分可检查，但 completion、抽取输出、pair、rewrite、KL、最终语料、哈希、决定、映射、split 与许可证仍不可得。未核验到构造去污染或评测重叠审计。LiveCodeBench 日期限制不是训练数据清洁性的证据。

**泛化/复现限制。** 主要证据来自两个 DeepSeek-R1-Distill-Qwen 尺度、三个数学 benchmark 与一个有日期边界的代码 benchmark。结果平均 16 次运行，但 seed、完整生成/改写算力和独立复现不可得。作者称其为 offline-only，因而无法在分布变化时用新反馈更新 policy（论文 §5）。
