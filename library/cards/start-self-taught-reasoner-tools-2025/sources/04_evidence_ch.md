最强证据涉及 hint-driven selection 是否在作者管线下改变训练后模型。下列结果均由作者报告，本卡没有独立复现。

| 实验 | 条件与作者报告结果 | 支持的解释 |
|---|---|---|
| Active-learning selection | 同规模 selected data 平均 **69.0**；不做 active selection 为 **67.6**；base model 为 **65.2**（表 7） | 在该训练和评测设置下，选择纠错案例有帮助；这不能验证未公开 checker |
| 轨迹格式 | 使用相同训练数据时，text-only RFT 平均 **65.2**，START tool trajectory 平均 **75.1**（表 8） | 交织工具交互的格式带来的作用超过仅复用已选问题 |
| Hint 转移结果 | 正确转错误 **10.4%**、正确转正确 **89.6%**、错误转正确 **33.0%**、错误转错误 **67.0%**（表 5） | Hint 会产生有用纠错，但也会引入错误，而且多数初始错误案例仍然错误 |
| 工具触发 | 对两个 base model，Hint-infer 在测试案例中都以 **100%** 比例触发 Python；直接或设计 prompt 为 **0–3.3%**（附录 C，表 11） | 干预能稳定诱发 Python 语法；trigger rate 不能证明调用有用、正确或安全 |
| 主要数学/科学平均 | START-32B-Preview 平均 **72.3**，QwQ-32B-Preview 为 **63.7**；START-32B-R1 平均 **78.7**，对应 base 为 **74.3**（表 2） | 完整 intervention、数据和 SFT package 提升了作者报告的 benchmark 平均 |
| 代码难度分解 | LiveCodeBench medium problem 提升较大，但 hard problem 只提升 **2.0 分**（第 3.6 节，表 3） | 代码改进并未在不同难度上保持一致 |
| 重复 hint | 增加 hint 在部分 START 设置上会进入平台期或降低准确率，包括 GPQA 与 MATH500（第 3.7 节；附录 B，表 10） | Hint 数量不是单调的数据质量或 test-time-compute 旋钮 |

转移表尤其有审计价值。33.0% 的 wrong-to-correct rate 提供 Hint-RFT 所需正例，但 67.0% 的 wrong-to-wrong rate 表明多数初始错误轨迹并未修复。10.4% 的 correct-to-wrong rate 是可测的错误干预成本：hint 可能破坏原本成功的行为。论文没有发布 denominator、benchmark 组成、confidence interval 或这四组底层轨迹。

表 7 只支持其已披露条件内的 active-selection effect。由于 checker output、comparator 规则和被拒样本不可得，它不能说明 final-answer checker 具有较低 false-positive 或 false-negative rate。表 8 在相同数据上更直接地支持 tool-interleaved serialization 相对 text-only 条件的价值，但仍把 Python 执行、格式和后续推理混合在一起。

主要 checkpoint 分数表明，端到端 package 可以在论文评测设置下提高 benchmark accuracy；它们不能隔离每条 `D_seed` 或 `D_START` 记录的贡献，也不能认证轨迹正确性、unique-prompt coverage、license、去污染、环境安全或可复现性。AIME 与 AMC 结果平均 16 次采样，而 MATH500 使用一次，因此不同 benchmark 的评测预算也不一致。

发布证据虽然是否定性的，但很具体：官方 ACL 和 arXiv 记录只提供论文与 checklist；没有核验到作者链接的代码、数据、START-0 或 START checkpoint、环境、生成日志、model card、dataset card、项目页或不可变 release。因此，这些实验是论文方法的证据，而不是其他实验室可以检查或复用其训练对象的证据。
