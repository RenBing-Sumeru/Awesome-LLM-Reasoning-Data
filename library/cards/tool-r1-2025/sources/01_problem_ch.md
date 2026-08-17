官方记录为 arXiv:2509.12867v1，提交日期是 2025 年 9 月 16 日；未核验到同行评审 venue。Tool-R1 处理的是智能体强化学习中的采样成本与训练不稳定：agent rollout 反复调用外部工具，完全依赖新鲜在线采样会很慢，而可用训练配方还必须把策略生成的推理/动作与环境返回的 observation 区分开。（arXiv 记录；论文 Introduction、§3.1–3.2）

该工作属于 `environment_agent_trajectory_data`，因为其主要对象是用于训练的完整可执行 agent episode，而不是静态 benchmark item。一个 episode 从问题和参考答案开始，在模型生成的 **Thought → Python Code** 与工具生成的 **Observation** 之间交替，跨执行保留变量，并在调用 `final_answer` 或达到 10 步上限时结束。它带有回答、解析、执行三类奖励分量和一个轨迹级标量奖励；近期 episode 还会保存在每道题独立的队列中。

训练池约含 1,300 对中等难度问答，来源是 MAT-Agent 以及论文引用的 2WikiMultiHopQA、HotpotQA。GAIA validation 只是论文报告的评测面；因此 Tool-R1 应定位为 agent RL 构造配方，而非 benchmark 或 evaluation-only 工作，论文证据也不支持把它泛化为通用 RLVR 数据集。

本 Card 的双语 review 材料依据 v1 全文、appendix、表 1–2、arXiv 元数据和作者关联仓库检查完成。证据边界同样关键：commit `5a4d9f7365508a9bdc23713a8250cf54b3ce14f9` 的仓库树只有一行 README，因此没有可复用的代码、数据、模型、轨迹语料或回放包。
