Kimi-Dev 的新意并不只是把强化学习用于代码，而是把 repository intelligence 组织为分阶段的数据路径：压缩的 issue-to-patch 与模拟导航记录训练 Agentless prior；可执行 BugFixer/TestWriter 任务提供二元仓库反馈；随后用相对少量 agent trajectory 学习交互式工具使用。

BugFixer/TestWriter 配对提供两种互补 verifier 视角。BugFixer 检查候选 patch 是否通过全部可用任务测试；TestWriter 检查生成的 regression test 能否区分 buggy revision 与已知修复。两者共用二元接口，因此可进入同一个 RL scaffold，同时保留不同输出对象。

Agent bridge 实验提出了一个与构造直接相关的主张：经过环境验证的 patch 能力可减少后续 agent-SFT 数据需求，并支持更长交互。200 条轨迹时的退化同样重要，因为它说明加入少量 adaptation data 可能伤害 prior，trajectory 数量并不带来单调的质量保证。

Self-play evaluator 还用 cross-execution 把生成测试变成 patch-ranking 机制。这是一种有用的 test-time verifier 构造；但 patch 与 test candidate 来自同一模型家族，若要把收益视作独立验证，就必须审计 correlated error。
