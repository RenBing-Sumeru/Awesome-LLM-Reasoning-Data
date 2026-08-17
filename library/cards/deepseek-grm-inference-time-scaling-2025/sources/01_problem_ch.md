官方 arXiv preprint 研究通用奖励模型能否通过增加推理时计算改善判断，尤其面向无法用可执行 verifier 直接给出正确性的通用查询。标量奖励模型效率高但只输出窄化分数；普通 LLM-as-a-Judge 或 critique model 也未必会随重复采样持续改善。因此，论文同时研究可扩展奖励生成的学习配方和测试时聚合流程。

可审计对象是围绕一个 query 与一个或多个候选 response 的奖励生成轨迹：生成的原则、文本 critique、pointwise score、训练中使用的正确性标签、重复奖励样本以及可选的 Meta RM 权重。DeepSeek-GRM 属于 verifier 基础设施，而非已发布 rollout 语料。官方 Hugging Face collection 列出 16B、27B 和 MetaRM checkpoint，但混合内部/开放训练 manifest、原始原则与 critique 及条目级 lineage 未确认发布。
