主要证据是作者在 SWE-bench Verified 上报告的训练阶段结果：base Qwen2.5-72B-Instruct agent 的 Pass@1 为 11.4%，RFT 后为 20.5%，Stage 1 RL 后为 35.7%，Stage 2 RL 后为 39.0%。最终 checkpoint 在保留的 May/June SWE-rebench split 上分别达到 35.0% 和 31.7%。这些数值依赖论文的 scaffold、validation harness、长上下文预算和 checkpoint 选择过程；尚未核验到发布模型或独立复现（Table 1）。

阶段对比支持一个较窄结论：在报告设置下，终局可验证的自生成 RFT 再接 on-policy RL，与更高的软件修复通过率相关。它不能隔离所有变量：Stage 2 同时改变任务选择、context length、turn limit、每 iteration 问题数和 batch size。因此，分数上升不能单独证明更长 context、2,028 任务 curriculum 或底层 trajectory corpus 本身质量更高。

论文给出了一项具体负面结果，显示 sampling 的敏感性。训练中途一次 vLLM 变更开始读取 model config 中的 `top_k` 与 `min_p`，使原本预期的 rollout 分布被截断；5–10 次 iteration 后性能下降。恢复无过滤 sampling 后性能回升。这说明 inference 版本或配置的细小漂移会改变 on-policy 数据分布与训练结果，而非无关紧要的工程细节。

论文还报告，直接删除所有超出 context 的重复循环 episode 会丢掉有用负样本。最终方案改用软长度惩罚，使同一 10-rollout group 内存在 reward 差异时，成功和失败 RL trajectory 都能贡献。RFT 则拒绝失败尝试。论文没有公布 RL 成败数量、轨迹长度分布、零 advantage 丢弃率、verifier false positive/false negative 或用于核验这些解释的原始日志。

所有结果仍是作者报告。超过 100 次 RL iteration 中反复使用 Verified-50 可能影响 checkpoint 与设计选择，而排除 May/June 只构成时间上的训练边界。benchmark 分数和测试通过都不能证明数据权利完备、无污染、patch 在测试覆盖外语义正确、agent 行为安全或 episode 可重放。
