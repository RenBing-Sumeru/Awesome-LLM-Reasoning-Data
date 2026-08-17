MLGym 的核心思路是把异构 ML 实验转化为统一的 container-and-command 接口，同时让任务专属程序化 evaluator 负责评分。agent 接收 task/dataset instruction、可选 starter artifact、历史 message 与 tool documentation；每个 step 只输出一条 shell 或 tool command，并观察文本结果与 workspace state。

action space 包括非交互 Bash，open、scroll、search、find、create、edit、insert 操作，`validate` 与终局 `submit`。可选模块还提供 literature search/PDF parsing 与 memory 操作，但这些模块并非都用于论文报告的比较。任务专属 Python evaluator 读取灵活 artifact，并输出 accuracy、validation loss、R2、BLEU、game/RL return 或 wall-clock time 等 metric。系统不使用 learned judge。

该 benchmark 最关键的 feedback contract 不同于一次性评测。`validate` 调用评分面、返回当前 test-set score 且不终止，因此 agent 可以反复根据可见 test feedback 调整。`submit` 评分后终止。达到 step 或 USD budget 时，在可行情况下会自动提交最新 codebase。只要至少产生一个 evaluator score，该运行就算 valid；valid 不等于超过 baseline，也不代表具备科学新意。

公开环境的原生 Gym transition reward 恒为 0。任务 metric 被追加到 `info.score`，跨任务比较随后把 metric 方向转换为 performance profile 与 area under the profile（AUP）。若要把 `info.score` 当作 RL reward，需要论文并未实现的显式 adapter 与 objective。已展示的 supervision 是附着在 step 与 full episode 上、用于 evaluation 和 audit 的 evaluator feedback。

相较只提供 prompt 与最终 score 的 benchmark suite，MLGym 在同一环境抽象中发布 task config、execution trace、中间 validation history、灵活 submission、failure state 与 replay code。相较 MLE-Bench、MLAgentBench、RE-Bench、ScienceAgentBench 和 SWE-Agent，其报告范围是统一 command loop 下的 13 个 Level-1 研究任务。论文没有展示 autonomous scientific discovery 或 policy training。
