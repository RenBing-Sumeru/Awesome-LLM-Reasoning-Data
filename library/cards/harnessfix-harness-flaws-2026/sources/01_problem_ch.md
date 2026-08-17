HarnessFix 是 2026 年 arXiv 论文和官方 GitHub release，处理的是 LLM agent benchmark 里的一个很具体问题：低分不一定只来自 agent，也可能来自 harness、环境、任务描述或 evaluator 的缺陷。论文从 SWE-Bench Verified、AppWorld、Terminal-Bench 2.0、GAIA 四个 benchmark 的失败轨迹出发，判断哪些失败应归因于 harness flaw，并尝试修复。

这张卡收它，是因为它把“评测 harness 缺陷”变成可审计的数据对象，而不是把它当成普通 agent 失败案例。一个对象包含失败轨迹、benchmark 反馈、缺陷诊断和修复；反馈契约来自原 benchmark 的执行/评分机制以及修复后的验证。它不是训练 recipe，也不是新的通用 agent benchmark。
