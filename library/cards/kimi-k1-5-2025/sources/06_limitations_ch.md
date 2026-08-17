Kimi k1.5 明确为 proprietary，且没有开源。官方 GitHub 仓库包含技术报告、PDF 和图片，而没有权重、代码、数据、奖励模型工件、checkpoint manifest 或软件 release。因此，报告层面的描述不能被当作可运行配方。

来源混合数据仍停留在高层级。报告列出领域和过滤类型，但没有原始来源 URL、比例、token 数、样本级谱系、完整 prompt、保留率、模型版本或许可证；它也没有给出全局 train/validation/test split、公开去污协议或泄漏结果。

反馈合同同样存在风险。基于最终答案的正确性可能奖励无效推理；报告过滤了一部分容易 hack 的 prompt，但也承认 verifier 有局限。CoT RM 的准确率来自人工 spot check，而不是公开的独立审计。生成式代码测试即使经过一致性过滤仍可能遗漏错误，partial rollout 也改变了 on-policy 与复用轨迹片段之间的关系。
