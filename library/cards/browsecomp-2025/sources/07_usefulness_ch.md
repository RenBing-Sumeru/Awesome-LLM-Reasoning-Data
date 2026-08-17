对 `environment_agent_trajectory_data` 轨道而言，BrowseComp 最有用之处是作为一个边界案例：任务需要环境交互，但发布只序列化问题、答案、topic 和 canary。轨道审计可以用它检查 Card 是否错误地把 agent benchmark 提升为轨迹数据集。若围绕 BrowseComp 构建可回放 episode schema，必须另行增加查询/action/observation 记录、URL 与页面捕获、工具和模型 revision、预算、停止原因、置信度、grader transcript，以及成功与失败路径；benchmark 本身没有提供这些字段。

有证据支持的复用类别只有 evaluation、audit 和 test-time-compute analysis。用于评测时，应使用官方例程解密 CSV，修复并测试标签 parser，固定 grader 及其 prompt/设置，固定 agent 与搜索栈，并记录实时网页日期和预算，同时报告准确率与置信度行为。用于审计时，应测量替代答案敏感性、judge 漂移、当前 scorer 正确性、canary 暴露、训练/测试重叠和网页漂移。用于测试时计算时，应在等预算下比较重复采样并明确计算单位；论文的 64 样本分析是参考设计，不是已发布 rollout set。

该发布没有被证明可安全用于 SFT、distillation、reward modeling、RLVR 或 agent-policy training。公开问题与答案属于测试集，发布后的污染状态为 unknown，且没有公开可复用轨迹或过程奖励。应把它视为需要先修复 scorer 并固定环境的评测/审计参考，而不是 training-ready data。Benchmark 性能只能用于比较给定条件下的被测系统，不能代替对问题、参考答案、judge、权利或 lineage 的验证。
