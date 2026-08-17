核心思想是把 Agentless patch generation 训练成 tool-using SWE-Agent 的技能先验。GitHub issue/PR 记录先教授代码通常在何处、如何变化；精确定位推理与模拟文件工具对话加入仓库导航结构；Docker 验证的 BugFixer/TestWriter RL 再把输出绑定到可观察的仓库行为；最后用公开 SWE-Agent 轨迹把先验适配为交互式工具使用能力。

其 feedback contract 刻意保持稀疏。BugFixer 只有在全部可用 ground-truth unit tests 通过时才得 1；TestWriter 只有在 buggy revision 上失败、而在 ground-truth fix 后通过时才得 1。方法不加入 format 或 process reward，因此选择压力来自任务测试以及 sampling/curriculum 规则。

这条桥接路线是论文最强的数据构造主张。在论文条件下，RL prior 用 \(2^{23}\) 个 agent-SFT token 达到 Base 最佳 agent pass@1，而 Base 需要 \(1.5\times2^{28}\)。该结果依赖论文任务集、轨迹来源、适配实现与评测协议，不能外推为普适的数据效率保证。
