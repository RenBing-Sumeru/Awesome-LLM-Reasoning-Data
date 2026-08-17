Addendum 最具体的贡献，是给出了自动长时程行为审计的可审计形状：seed 数、每个 target 的 transcript 数、turn 范围、目标模型、generator family、评分维度、scale、threshold 与 uncertainty method 都被命名。增量系统卡很少披露如此多结构字段。

它还把安全训练连接到 agent environment，而不只限于 chat refusal。Computer-use screen、隐藏环境指令、长时程 coding、sandbox、hidden test 和 training-environment hacking 共同形成 state-action 与 full-episode 审计对象。

报告也较坦率地披露 validity threat：极端 seed 会塑造绝对分数；evaluation awareness 增加；reward-hacking task 来自 training distribution；一个 blackmail test 使用与发布模型极其相近但不完全相同的 checkpoint；历史指标被修正。这些限定与 headline number 同样重要。
