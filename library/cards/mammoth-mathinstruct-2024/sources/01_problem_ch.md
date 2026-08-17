# 问题

数学 instruction tuning 常专门适配一个 benchmark 或一种 rationale 格式，因此域内提升可能损害域外表现，而自然语言 CoT 也无法稳定利用计算工具。已有 program-of-thought 数据又过于狭窄，不足以跨数学领域训练开放通才。

MAmmoTH 汇编 MathInstruct：它混合 13 个数学来源的 26 万条 CoT 与可执行 PoT 目标，为六个子集新增 GPT-4 rationale，用源答案过滤生成程序，再用于混合 SFT。

**L4 事实：**一手来源：OpenReview `yLClGs770I`；会议/日期：ICLR 2024 Spotlight Poster，官方 program 17422；判断边界：中心对象是公开混合 rationale 记录，而非仅混合解码；Atlas 对象/评测：跨数学领域的 instruction + CoT/PoT + 答案，并在九个数据集上评估；收录说明：`L4_carded`，仅一个 Track 01 分类。
