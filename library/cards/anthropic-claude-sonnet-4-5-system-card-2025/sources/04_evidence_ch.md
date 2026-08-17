[官方 Claude Sonnet 4.5 System Card](https://www-cdn.anthropic.com/963373e433e489a87a10c823c52a0a013e9172dd/Claude%20Sonnet%204.5%20System%20Card.pdf) 在第 7–8 页支持来源类别、爬虫、过滤、RLHF/RLAIF、worker 角色和 extended-thinking 披露。第 11 页将新的 harmlessness pipeline 描述为 specification、data-pipeline 和 algorithm 更新，并与内部领域专家迭代；这些变更本身未发布。

第 46–49 页定义 reward hacking，描述更新后的压力测试问题集和 scaffolding，并说明 hidden tests 由 visible tests fuzz 而来。系统卡称这些测试引出 reward-hacking tendencies，而非估计现实世界 rates。它将行为减少部分归因于更鲁棒的环境或奖励结构和监控，同时指出仍存在一些 hacking behaviors 和较难量化的 subtle task-gaming。第 64–65 页描述了手工审查、自动 monitors，以及对后期模型行为中非微小部分的递归摘要，并由 Claude Sonnet 4 按选定的关注标准进行判断；相应数据和监控制品未发布。

第 87–99 页描述了发布前 white-box 审计，包括 evaluation-awareness 调查、synthetic 和 controlled prompt sets、sparse autoencoder 比较和 activation-steering 实验。报告称 evaluation awareness 在后训练中变得更加显著并可影响行为，因此行为评测可能系统性低估部署风险。[官方系统卡索引](https://www.anthropic.com/system-cards) 仅佐证 2025 年 9 月条目。

