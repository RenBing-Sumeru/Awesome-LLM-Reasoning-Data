主要正确性信号是模型自身产生的多数投票伪标签。Solver 可能对错误答案达成一致，replay 还会让错误跨迭代保留。论文没有披露答案规范化、等价分组、平局、异常输出处理，也没有说明如何纠正或删除错误记忆条目。记忆容量、淘汰、版本化、被拒记录数量与 transition ledger 同样未知。

SAM 是未经校准的技能等价代理。其规范化器被明确要求在问题含糊或有缺陷时推断一个预期的有效解释，因此表示过程可能静默改变任务。论文没有报告执行生成代码。Embedding similarity 可能合并不同技能，也可能拆分等价技能，阈值也未用专家标签校准。对于难以形式化的领域，code bottleneck 还可能失效。（论文 Appendix A.2 与限制讨论。）

GPT-4o 提供答案复核 prompt、duplicate judgment，以及五个每轮 200 题分析集合的标签，但其精确模型 revision、decoding、adjudication、覆盖率与错误率未知。Benchmark 实验没有报告 seed、多次运行方差、生成记录数量或系统性 decontamination。把近期 AIME 题描述为“可能未污染”并不等于 item-level overlap audit。

复现性仍然有限。官方仓库没有 training/inference code、数据、权重、memory snapshot、环境 lockfile、tagged release 或 LICENSE。论文只给出八张 H20 硬件和 4B 单轮耗时，没有完整 compute、token 数、8B 成本与长期记忆扩展分析。因此，benchmark 提升不能证明记录正确、data quality 或 release completeness。
