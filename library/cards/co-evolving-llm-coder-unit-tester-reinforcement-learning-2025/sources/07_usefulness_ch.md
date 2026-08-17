对于 `rollout_search_test_time_trace_data` 轨道，CURE 提供了清晰的双角色可执行轨迹模式。可复用 episode 应保留：任务及来源版本；分开存储的公开样例与私有 gold tests；策略 checkpoint；角色；原始 coder/tester 提示和回答；采样 seed 与解码设置；每次代码—测试执行的 stdout、stderr、超时和解析结果；完整交互矩阵；由 gold tests 得到的代码标签；两个标量奖励；优化步骤；以及最终评测结果。

该模式支持多种用途。训练阶段可研究验证器错误如何通过耦合策略更新传播；测试时计算阶段可在相同执行预算下比较代码/测试采样分配和 Best-of-N 选择；奖励研究可比较直接的 gold-test coder 奖励、推导的 tester 区分奖励，以及用于训练另一模型的生成测试奖励。失败或相互矛盾的 episode 对审计尤其重要，不应被丢弃。

复用时必须明确三个边界。训练中的 private tests 对模型提示不可见，但在当前发布中可公开下载；生成测试属于 selector 或 reward，而不是最终真值；最终 benchmark private tests 用于评估被选程序，除非明确标记为事后分析，否则不应反向填充为中间 rollout 标签。

扩展该配方前，应固定仓库提交和执行环境，发布确切训练/评测清单，使用 mutation 或对抗候选审计 gold-test 覆盖率，报告奖励假阳性，并对生成测试策略与 coder 策略 checkpoint 分别做版本记录，即使两种角色共享参数。
