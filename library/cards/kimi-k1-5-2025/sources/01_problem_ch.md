前沿推理报告可能展示出色的 RL 结果，却不公开检查其形成过程所需的实际 prompt、训练记录、奖励数据、代码和来源 manifest。本卡片的关键问题因此不是 Kimi k1.5 是否报告了强结果，而是它究竟让哪些数据与反馈接口可被审计。

Kimi k1.5 描述了一条跨越预训练、vanilla SFT、Long-CoT warmup SFT、RL 和 long2short 压缩的多模态管线。它给出了 prompt、verifier、奖励模型、生成式代码测试和 rollout 基础设施的具体机制，但模型与数据工件仍是 proprietary。本卡片记录这一部分披露边界。
