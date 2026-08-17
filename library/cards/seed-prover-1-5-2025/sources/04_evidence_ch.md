Agent-only light Pass@8×8 报告 PutnamBench 359/660、FATE-H 57/100、FATE-X 10/100。完整流程在每题最多 10 H20-days 下报告 PutnamBench 580/660、FATE-H 80/100、FATE-X 33/100、CombiBench 48/100；论文自己指出 CombiBench 存在显著形式化问题。

Putnam-200 被用于监控约 1,200 个 RL step 并选择 step 1,055，随后论文又报告显然包含该子集的完整 660 题 PutnamBench。因此 580/660 部分适配了 checkpoint 选择，并非完全未触碰的测试估计。论文没有披露 Putnam/FATE 成员级去污染。

Putnam 2025 每题最多使用 40 H20-days，在九个墙钟小时内得到 11/12。官方 zip 含除 A5 外的 11 个解答，固定 Lean/Mathlib 4.22.0，解答文件中未发现文本形式的 `sorry`、`admit`、`axiom` 或 `native_decide`；本次未独立编译。`VerifyStmt.lean` 仅检查解答声明与另行编码 statement 的类型相等，不验证其与英文题意等价。
