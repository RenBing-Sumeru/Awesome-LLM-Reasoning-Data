主要证据是官方 31 页 [GPT-5.3-Codex System Card](https://deploymentsafety.openai.com/gpt-5-3-codex/gpt-5-3-codex.pdf)。第 6 页的 4.1.2 节陈述了观察到的破坏性操作倾向、RL rollout 中作出冲突编辑的“user model”，以及不回退用户更改时给予的正向强化。同一页把表 2 明确标为一项 destructive-actions evaluation，用于测量干预是否有效。这一叙述顺序支持“干预 + 评测”的解释，不能据此推断表中指标就是 RL reward。

报告对部分评测和部署场景给出了更丰富的细节，但这些细节只是澄清边界，并不能填补训练信息缺口。例如，Monorepo-Bench 被明确标为评测：代理从变更前分支开始，接收人工编写的 prompt，通过命令行工具和 Python 修改代码，并由隐藏单元测试评分。产品沙箱、网络控制、网络安全 monitor 和 red-team campaign 同样位于这项狭义 RL 干预之外。报告没有把它们中的任何一个认定为冲突编辑干预的后训练环境、任务来源、trajectory corpus 或 reward 实现。

官方[发布页](https://openai.com/index/gpt-5-3-codex-system-card/)核验了标题、发布日期和作者机构。已接受的官方来源中未核验到官方 arXiv 记录、DOI、训练数据、trajectory、reward 或 verifier 实现、训练代码、模型权重或 BibTeX 记录。报告中的评测结果只能证明模型在对应评测设置下的行为，不能证明未披露训练数据或反馈具有高质量。
