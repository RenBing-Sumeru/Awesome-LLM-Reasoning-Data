输入是 Putnam 原题和目标证明助手语言。流程可以按五步理解：先把自然语言题目手工编码成形式化 theorem；再处理 Lean 4、Isabelle、Coq 各自的库、语法和类型约束；对需要“给出某个对象并证明”的题目，提供 answer-given 与 answer-finding 的 factored 版本；评测时让模型在固定 prompt/scaffold、attempt budget、timeout 下生成候选 proof；最后把候选 proof 交给对应证明助手检查。

输出不是普通答案文本，而是 benchmark 文件、可选 informal statement、leaderboard 记录，以及每个语言/设置下的 solved/unsolved 结果。反馈方是 Lean/Isabelle/Coq 的检查器，不是 LLM judge。复现时必须固定仓库 commit、proof assistant 版本、依赖库、timeout、prompt、尝试次数和 factored task 类型。若要把它用于训练奖励，必须另行保存失败 proof、checker message 和采样预算；论文中的 aggregate score 本身不能直接当过程监督。
