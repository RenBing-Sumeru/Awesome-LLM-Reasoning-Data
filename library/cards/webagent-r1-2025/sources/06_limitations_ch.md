
反馈是稀疏且只在终局给出的。string match、URL match 与 program execution 可以核验 task-specific 条件，但不会为中间 action 分配 credit，也不衡量推理忠实性，更无法排除满足 checker 却产生非预期状态变化的行为。论文明确把细粒度 reward shaping 留给未来工作。dynamic context compression 还会把早期 HTML 替换为简化占位内容；虽然 action history 得以保留，但论文没有量化丢失了哪些 observation 证据，也没有分析压缩错误如何影响后续决策。

复现与数据审计仍不完整。论文没有披露 M-GRPO group size、在线 rollout 总数、随机种子、精确任务调度、默认交互上限、逐次运行的失败分布、去污染流程或冻结的环境/状态 manifest。仓库包含代码与搭建说明，但未独立核验到在线轨迹、reward log、训练后 checkpoint、tagged release 或不可变 WebArena image。公开的 9,460 条 BC 轨迹被论文说明为 Apache-2.0；新生成在线 episode 的权利与许可没有单独文档，因为这些 episode 并未发布。

证据仅覆盖五个 WebArena-Lite 网站上的纯文本交互和一个含 165 个任务的留出集。网站状态、认证、cookie、任务顺序与 reset 行为都可能改变轨迹分布。平均提升会掩盖个别网站上的退化，而 WebAgent-R1-Zero 说明，当初始策略无法生成有效 action 时，稀疏奖励 RL 可能失败。long-CoT 增强虽然带来更好的 SFT 起点，RL 增益却更小，因此更冗长的轨迹不会自动成为更好的探索数据。最后，更高 benchmark 成功率既不能证明轨迹整体高质量，也不能证明数据可复用；它只支持被评估的策略—环境—checker 组合。
