构造流程分两阶段。Stage 1 让 DeepSeek-V3 根据问题、对应 CoT、预定义 operators 和持续演化的 library 提议问题专用 predicates。能够通过 SWI-Prolog 语法检查的定义进入共享 buffer；其名称可在后续 prompt 中复用，频繁调用的 predicates 还可晋升到 canonical set。

Stage 2 输入问题、CoT、选定 predicates 与候选符号答案类型，生成完整程序。SWI-Prolog 执行程序，改造后的 Math-Verify checker 再通过结构化 term 转换、规范化、解析、符号等价或数值容差，将输出与 gold answer 比较。失败实例最多获得三次不同 temperature 的解码尝试。

初始流程验证 7,500 题中的 6,100 题，即 81.3%。随后以 SFT 和 GRPO 搜索失败集，并合并四个恢复模型的 verified successes。论文报告额外增加 16.1 个百分点，总覆盖率达到 97.4%；但固定 revision 的当前公开发布只有 6,093 行，并不是该并集的逐条清单。
