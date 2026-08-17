本文的贡献是在延迟约束下分配两类并发资源。branch-wise parallelism 并发生成 `B` 个候选解，再聚合其最终答案；sequence-wise parallelism 使用 speculative decoding，由较小的 draft model 提议若干 token，target model 并行验证。作者把 `B` 与 draft length 视为争用未充分利用算力的两个维度，并通过 greedy search 判断在目标延迟下应扩展哪一维。（论文 §3.2–§3.3，Algorithm 1）

反馈契约位于最终答案与系统层面。默认 selector 是 majority voting，另以四种置信度加权方案做消融；benchmark scorer 判断聚合后的最终答案，墙钟延迟约束配置。该契约能观察答案一致性或模型置信度，以及汇总后的正确率/延迟，却不标注推理步骤，不能保证多数答案正确，也不揭示增益来自哪个候选、答案抽取规则、平票处理或 draft-token 接受事件。

既有 test-time scaling 工作已按 token 预算研究长链、重复采样或 verifier 选择；self-consistency 已使用 majority voting，speculative decoding 也已用于无损加速。本文更窄的改变，是把分支数和 speculative draft length 放入同一个延迟感知资源分配问题并搜索联合配置。因此它是系统与评测方向信号，不是新的 verifier 或开放推理数据集。（论文 §2）
