系统卡没有发布预训练或后训练样例、来源清单、token 或 sample 数量、混合权重、收集日期、来源级权利、opt-in 处理、去重、去污染、过滤规则或产量、preference records、measured-correctness records、sycophancy labels、safe-completion examples、reasoning traces、奖励函数或模型、校准、优化器设置、rollouts、schedules、checkpoint 谱系或训练环境。

无法从报告复现 router。其输入只在概念层描述，并点名三类训练信号，但 record schemas、sampling、correctness measurement、preference aggregation、objectives、thresholds、exploration、更新频率、流量分配、fallbacks、failure rates 和 logs 均不可得。并行测试时计算同样只做高层披露：尝试次数、选择、聚合、延迟/成本预算和逐任务分配均为 unknown。

评测披露并不均衡。部分公开事实性 benchmarks 和 grading prompts 得到识别，但多数 safety、production、red-team、chain-of-thought 和 Preparedness 条目与完整输出不可得。LLM graders 带来测量依赖；某个事实性 grader 的 75% 人类一致率不是完整误差审计。在线前代对比值可能漂移，gpt-5-thinking-pro 的安全结论依赖代理结果而非专门重跑。

部署保障造成归因限制。生物风险控制横跨 model training、system-level protections、conversation scanning、human expert review、account enforcement、API safety identifiers 和 access programs。端到端 safeguard testing 不能隔离训练效果。High capability 处理是谨慎性决定，且报告明确称缺少达到阈值的决定性证据。系统卡没有附带代码、数据、权重或独立复现包。
