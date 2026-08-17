论文的贡献是Turn-level Adjudicated Reinforcement Learning（TARL）：把规则验证的终局结果与GPT-4.1附着在各交互轮次上的判断结合起来，再将两类信号聚合为GRPO或PPO实际使用的标量（论文§3.2）。

数据与反馈对象把policy、隐藏的用户任务指令、ground-truth function-call trajectory、完整带标签对话、逐轮judge分数、terminal verifier结果和最终trajectory reward连接起来。GPT-4.1为每轮给出`-1`、`0`或`1`：`-1`表示主要重大偏离，每条trajectory最多出现一次；`0`表示问题或后续连带错误；`1`表示该轮正确。terminal verifier仅在必要的数据库写操作及其参数与ground truth完全匹配时返回1，否则返回0（论文§2.1、§3.2；附录“LLM Judge Setup for Turn-Level Evaluation”）。

这是一个mixed feedback contract。规则verifier观察成功的数据库写操作和参数相等性，但主要RL与评测排除了tau-bench中对措辞敏感的expected-output check。judge可以观察任务意图、ground-truth call、policy身份和完整对话，但其评分属于模型判断，并非程序化证明。TARL保留了这些label的process来源；然而稳定版本把它们聚合成一个episode分数，对policy token统一赋值，同时mask environment token（论文§2.1、§2.2、§3.2、§5.1）。

相较只使用tau-bench终局信号的RL，TARL增加了局部adjudication；相较直接逐轮放置reward，它又因直接放置不稳定而回到trajectory-level credit。可与`verltool-holistic-agentic-rl-with-tool-use-2025`一起阅读，以了解更广泛的agentic RL工具，但应单独保留本文特有的turn judge与terminal rule组合契约。
