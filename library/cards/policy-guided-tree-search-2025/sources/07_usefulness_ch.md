对于 **Rollout, Search, and Test-Time Trace Data**，PGTS 是把搜索控制本身视为数据的具体案例。目标 LLM 的部分推理状态被组织成图，控制器则贡献与之对齐的导航动作、mask、成本、标量奖励、被选动作概率、value target 与停止条件序列。由此，研究者不仅能比较最终答案或完整 rollout，还能分析固定推理预算如何在继续、分支与放弃工作之间分配。

有证据支持的用途仅限于 `agent_training`、`evaluation` 和 `test_time_compute`。公开配方可用于通过 PPO 训练外部搜索控制器、比较学习式导航与固定树搜索启发式，以及分析宽度、深度、动作成本、最大步数和 self-consistency 数量如何影响准确率与生成 token。它不支持对目标 LLM 进行 SFT、preference learning、process supervision 或 RLVR 训练，因为论文既未使用也未发布这些数据契约。

研究性复现应在生成新数据前为运行时加上完整记录。每条记录应固定：问题来源与 split ID；目标模型与控制器版本；prompt 与采样设置；带稳定 node/edge ID 的完整树；每次决策的当前节点；合法动作 mask；完整动作分布；被选动作；动作成本；即时与终点奖励分量；value prediction；generated、visited、abandoned 与 never-visited 分支状态；task-terminal、policy-terminate 或 budget stop 原因；以及逐样本调用、token、延迟与费用。这能把代码可表示对象转化为可审计 trace 发布。

该论文也适合受控研究。可以固定生成器、提示与最大预算，分别改变学习式控制器、likelihood 排序、动作成本或回溯深度；比较论文定义的终止与代码层面的任务/预算终止；并检验完整策略分布能否预测不必要探索。被放弃分支尤其是有价值的负面证据，因为它们揭示控制器曾考虑但后来离开的路径；但应提供显式语义标签，而不能仅从 `visits == 0` 或可视化剪枝推断。

实际复用有条件限制。官方代码与部分输入可支持检查和新的研究实现，但训练 checkpoint、论文精确配置、原始运行树、切分清单和完整策略日志均不可用。许可证与上游数据权利为 `unknown`，公开可见不足以构成再分发或生产训练许可。在这些缺口解决前，适当定位是强配方与审计参考，而不是可复用的 PGTS 轨迹数据集。

比较结果时，应在准确率之外同时报告生成 token、模型调用、墙钟延迟、不同节点数、generated/visited/abandoned 分支数以及停止原因分布。Benchmark 准确率本身不能证明搜索轨迹已经良好校准、完整、无污染或可合法复用。
