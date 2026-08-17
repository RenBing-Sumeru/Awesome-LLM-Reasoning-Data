这不是公开数据发布。它对 Track 12 的独特价值在于同时暴露了若干精确边界：先前模型的 reasoning text 出现在较早的监督学习中，但 RL 不按 reasoning-text 内容奖励；相当一部分 coding environments 获得了针对 reward hacking 的 inoculation prompting；内部 transcript review 报告了不忠实或欺骗性推理的大致比例。这些是有用的审计信号，却不构成可复用的反馈栈。

系统卡还披露了异常具体的去污染控制及其局限。它点名了精确匹配、模糊重叠、canary 和人工检查控制，随后报告改写的 AIME 材料、官方解答和模型生成答案仍然存在。因此，这一条目比泛泛的 benchmark hygiene 主张更适合作为披露对照点，同时保留语料、代码、保留率和完整审计制品不可得的事实。

