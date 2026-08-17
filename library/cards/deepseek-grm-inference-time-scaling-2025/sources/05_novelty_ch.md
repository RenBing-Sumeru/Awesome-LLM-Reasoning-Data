既有 scalar RM 高效但奖励维度固定；带 critique 的模型或 generative judge 虽能输出文本，却未必经过面向重复采样增益的训练。SPCT 的主要变化是让评测原则本身也由模型生成，使其依赖当前 query 与候选集合，并用 rule-based online RL 联合优化“原则—critique—分数”行为。Meta RM 随后把采样得到的奖励轨迹当作可在聚合前再次评估的对象。

对本图谱而言，这是方向信号，因为 verifier 输出由此成为搜索轨迹：多个判断视角、critique、分数和二阶筛选共同形成一个奖励。可复用发布应暴露这一层级，而非只给最终 scalar score。Generative critique、preference label、GRPO、voting 和 learned reward model 均非单独的新发明。论文报告的 benchmark scaling 是端到端 judge 的质量信号，不证明底层原则、critique、标签或来源混合分别正确。
