一句话贡献是：Agent Island 把七个自适应模型的社交博弈转成结构化 full-episode evaluation data，再用每场游戏的参与者集合与 terminal winner 估计 Bayesian skill posterior，而不是对固定 prompt 集打分。

环境是核心机制。每场游戏从模型池中无放回抽取七个不同模型；同一 provider 的不同模型可以相遇。elimination round 中，private sidebar 形成局部隐藏 context，public pitch 向所有在场玩家暴露主张，private vote 与 rationale 则推动淘汰。final round 改变了投票者集合：两名 finalist 进行 pitch，五名已淘汰玩家组成 jury。淘汰票或最终胜者票出现平局时，环境均匀随机决胜。因此，log 记录的不只是 transcript，还包括每个玩家可见的 event、成功解析的 choice、持续变化的 active/eliminated set 与 terminal selection。

feedback contract 是 mixed。模型 agent 通过 sidebar selection、elimination vote、final vote 与 rationale 给出判断。parser 抽取选择；环境对已解析 vote 做确定性 tally，必要时执行随机 tie break，并输出单一 winner。随后 Bayesian Plackett-Luce 为 latent skill 设置 Gamma(1,1) prior，并把胜者概率建模为其 skill 除以所有参与者 skill 之和。Gibbs sampling 使用 2,000 次 iteration、500 次 burn-in 与 seed 42，得到 posterior skill 与 uncertainty。该机制能观察 winner outcome 与 participation set，却不会独立验证中间消息的真实性、公平性、说服质量或 reasoning quality。

相较传统 static benchmark，持续变化的对手使 episode 会响应当前模型行为，也避免有限的可复用答案库。相较 pairwise chat preference surface，Agent Island 记录七个 agent 的多轮 state/action history 与终局 jury decision。accepted evidence 没有确认唯一的外部 closest benchmark，因此本卡片不猜测名称。该方法把已有的 multiagent simulation、voting、parser 与 Plackett-Luce ranking 组合到一个发布且有版本的 episode corpus，以及独立增长的 live benchmark 周围。

对 reasoning-data 研究，关键链路是 `rules/config + seven model IDs -> visibility-conditioned interactions -> parsed votes and five eliminations -> final jury winner -> JSON episode -> posterior ranking and vote audit`。terminal result 只支持 evaluation 与 behavioral audit；它不是客观正确性、dense process supervision 或已经用于训练的 reward。
