
在包含 165 个任务的 WebArena-Lite 评估 split 上，表 2 报告 Qwen2.5-3B 从纯 prompting 的 6.1% 提升到行为克隆后的 20.0%，再到 WebAgent-R1 的 33.9%；Llama3.1-8B 则从 8.5% 提升到 20.6%，随后达到 44.8%。这些数字说明论文环境与 rubric 下被评估策略有所改进，但不能证明每条 BC 轨迹都正确、每条在线轨迹的中间 action 都有用，也不能证明未发布 rollout 可复用。

Ablation 更具体地显示了数据依赖。WebAgent-R1-Zero 从成功率 6.1% 的 prompted Qwen 策略开始，极少得到正奖励，RL 后还略有下降，这支持了在该稀疏奖励设置中必须先做 BC 初始化的结论。对 WebAgent-R1-CoT，QwQ-32B 数据增强把 SFT 起点从 20.0% 提高到 24.5%，但后续 RL 只达到 30.3%，低于标准 WebAgent-R1 的 33.9%；作者推测更确定的 long-CoT 模式限制了探索。不同网站上的效果也不均匀：对 Qwen，Reddit 从 BC 后的 42.1% 降到 RL 后的 26.3%，Map 保持 26.9%，尽管五个网站的平均值上升。

表 3 显示 thinking-format prompt 与更多交互轮次和更高 prompting 成功率相关，图 5 则报告对 prompting、SFT 和 RL agent，增加最大交互次数会提高成功率。这说明交互次数是相关的 test-time budget，但论文正文没有给出精确 sweep 数值，也没有与其他 test-time selector 做等预算控制。artifact 证据的边界比性能证据更窄：ACL Anthology 与 arXiv 可核验论文，官方 Apache-2.0 仓库包含环境、训练和评估代码；未核验到独立在线 rollout 数据集、训练后 checkpoint、tagged release 或冻结环境镜像。
