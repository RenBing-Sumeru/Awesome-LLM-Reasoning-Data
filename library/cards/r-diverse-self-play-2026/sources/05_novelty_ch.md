相较于 R-Zero，R-Diverse 的具体变化是让多样性控制同时感知历史与求解过程。MAP 把持久记忆作为跨迭代的排斥正则，并用同一历史为 Solver 提供 replay；SAM 先把自然语言问题映射为规范化 solver code，再计算相似度。二者共同区分词面新颖性与 Solver 实际练习的求解过程新颖性。（论文 §3.2–§3.3。）

Challenger-Solver 循环、GRPO、uncertainty curriculum、多数投票伪标签、experience replay、代码生成、embedding 与 LLM judge 都不是单独由本文提出。论文贡献在于诊断 Local 与 Surface Diversity Illusion，并把 MAP、SAM 嵌入数据生产循环；消融和多样性测量也与这一诊断相对应。

边界同样重要：SAM 是数据选择与 reward 代理，不是程序执行或 correctness verifier。MAP 保留历史并抑制重复探索，却不能让存入记忆的标签自动变得可靠。因此，真正的新意是对演化课程的构造控制，而不是新的 ground-truth supervision 来源或已经完成的开放数据发布。
