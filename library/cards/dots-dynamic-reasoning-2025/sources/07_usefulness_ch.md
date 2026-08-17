对于 **Rollout, Search, and Test-Time Trace Data**，DOTS 提供了一套紧凑的实验契约，可把动作轨迹选择与底层 solver 分开研究。后续工作可以固定问题池、solver、答案 checker、温度和执行预算，再改变 12 路动作语法、evaluation 采样次数、保留集合大小、tie-break 或失败保留策略。论文配置 \(K=2\)、\(N_{\text{eval}}=4\)、\(N_1=8\)、\(N_2=3\)、\(T=0.4\) 可以作为基线，但必须与当前仓库默认值分开报告。

原始发布可支持多种面向审计的用途：

- 对比同一问题、同一动作轨迹下的成功与失败对话；
- 估计答案抽取、精确匹配和程序输出格式如何影响轨迹排序；
- 在重建明确候选组并防止问题级跨 split 泄漏后，训练或评估 trajectory selector；
- 研究 GPT-4o-mini、Llama-3-70B-Instruct 与 Llama-3-8B-Instruct 的 solver 特定标签能否迁移；
- 设计更完整的发布，保留累积分数、每次剪枝/保留决定、重试/停止原因和逐样本计算预算。

论文还描述了一种 SFT 用途：external planner 学习解释与路径，internalized model 学习解释、路径、solver 推理和答案。这个用途作为构造配方有论文支持，但最终处理后的 SFT 文件与 checkpoints 目前无法核验。复用者要么从原始 trial 重建目标并重新生成 GPT-4o 解释，要么获得恢复后的官方 package；不应把现有 HF JSON 标记为可直接训练的最终 SFT data。

评估时，应分别报告名义轨迹执行次数、可变 Self-Verification 重试、生成 token、延迟和费用。应在匹配预算下比较固定 CoT/PoT、随机或启发式路由与搜索路由。由于搜索会重复调用 solver 并使用 ground-truth answer，得分增益混合了 planner 质量、额外构造计算和 evaluator 行为；benchmark 表现本身不能把收益归因于更好的数据。

适当的复用等级是：**强配方与原始 rollout 审计参考；有条件的研究复用；生产训练或再分发须等待 manifest 与权利审查**。复用前应确定稳定记录数与 splits，保持来源任务边界，记录去重与 benchmark overlap，协调论文/代码设置，并把 HF MIT 声明与未知代码许可证、上游衍生数据权利一起审查。
