OpenAI 于 2025 年 12 月 11 日发布 27 页的 *Update to GPT-5 System Card: GPT-5.2*。持续更新的 Deployment Safety Hub 在 2026 年 4 月 24 日加入 Chain of Thought Evaluations；该部分不在不可变的发布 PDF 中，因此本 Card 把它作为带日期的后续审计更新。

相对 `gpt-5-system-card-2025`，训练披露几乎未变化。GPT-5.2 重复公开互联网、合作伙伴信息、用户/训练者/研究者提供或生成的信息，以及家族级 reasoning RL；没有新增 GPT-5.2 source manifest、mixture、record schema、保留 CoT、reward、verifier、rollout、optimizer 或 checkpoint lineage。

真正的增量是评测数据边界：两个 prompt-injection 集合是训练数据 split；cyber-safety 评测明确 non-overlapping；部分生物集合只有窄范围 held-out/uncontaminated 声明；生产 traffic、internal PR、cyber environment、hidden test、CoT monitor 与 grader 得到描述。这些都是评测对象，不是训练记录。本 Card 因保留这些边界与 living-page/PDF 版本差异而进入前沿台账。
