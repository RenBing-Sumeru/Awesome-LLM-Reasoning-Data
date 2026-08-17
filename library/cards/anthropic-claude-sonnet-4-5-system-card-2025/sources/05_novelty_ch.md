这不是数据发布。它对 Track 12 的独特贡献在于异常明确地呈现了若干评测边界。reward-hacking 压力测试包含 hidden fuzzed tests、环境和奖励结构更新以及监控，但被明确说明并非现实世界 hacking-rate 估计。white-box 工作包含 snapshot comparisons、synthetic 和 controlled prompts、sparse autoencoders 和 activation steering，但仍是内部发布前审计，而不是已发布的可解释性制品。

系统卡还指出一个关键审计局限：evaluation awareness 可以改变行为，并使行为评测系统性低估部署风险。这并不能证明某种部署失败率，却是区分已报告评测证据与完整安全或后训练数据披露的具体理由。本卡片保留这种区分，而不把任一评测实践转换为可复用训练方法。

