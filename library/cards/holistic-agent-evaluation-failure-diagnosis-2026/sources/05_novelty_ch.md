已有基线包括 outcome-only benchmark、对整条 trace 做一次判断的 monolithic LLM-as-judge、TRAIL judge protocol、Agent GPA 和 AgentCompass。本文把评测单位从整条 trace prompt 改成多个聚焦的 span-level assessment，再加单独的 top-down metric。

方向信号是方法论：同一个 judge model 在 trace 被分解、并用结构化 rubric 评分时可以更好定位错误。不是新的部分包括 TRAIL、GAIA、SWE-bench 和 LLM-as-a-judge。复用前要检查 judge prompt、mapper、taxonomy alignment、annotation noise、trace schema，以及是否能访问论文使用的 GPT-5.4。
