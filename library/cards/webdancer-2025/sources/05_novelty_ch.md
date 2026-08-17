既有工作通常处于三类位置之一：不训练、直接 prompting 强模型进行搜索；在筛选后的 web 轨迹上做 SFT；或用 outcome-based RL 优化搜索行为。WebDancer 并未发明这些组件。它的具体变化是把任务合成、两种 teacher 风格、轨迹 rejection sampling、屏蔽 observation 的 SFT、live-web rollout、模型式终局奖励和 DAPO dynamic sampling 串成一条完整的 agent 管线。

新的数据对象不只是 QA pair。一个构造问题具有保持答案不变的 lineage，可产生多条候选 ReAct 轨迹，通过有效性/正确性/质量筛选后进入 SFT 或 RL；在 RL 中，它又变成包含 16 条 execution 的 group，其 reward variance 决定该 prompt 是否参与更新。因此，selection state 与环境反馈本身成为有效训练语料的一部分。

Short-CoT/Long-CoT 划分也是有价值的方向信号。GPT-4o 生成紧凑 ReAct demonstration；QwQ-Plus 提供更长推理，但下一次调用不会接收其先前 thought。Table 3 表明 teacher 选择同时改变成功率与 invalid-output rate，说明跨模型 trace transfer 是数据设计变量，而不是普遍成立的 distillation 增益。

并非新贡献的部分包括 ReAct、GPT-4o/QwQ teacher、Qwen backbone、Qwen-Agents、web search 与页面摘要、SFT、DAPO、verl、LLM-as-judge，以及 GAIA/WebWalkerQA benchmark。“端到端”描述的是这些组件的集成与训练顺序，并不意味着论文提供了新的确定性环境或完整开放发布。

复用前应核验完整 prompt lineage、action-count filter 的准确含义、精确 SFT/RL split、judge prompt 与 snapshot、失败样本保留、web 服务版本、benchmark overlap 和 dataset-specific rights。在这些问题解决前，该工作最可靠的用途是构造/审计参考，以及对小规模公开样例的检查入口。（论文 §§1–3、Table 3、Appendices D–E。）
