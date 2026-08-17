代码正确性评估需要判断候选程序是否实现了题目要求。若能在安全运行环境中执行覆盖充分且可信的测试套件，就可获得较强判定条件；但私有测试和可执行环境可能不可用，此时直接使用 LLM-as-a-Judge 容易出现浅层分析、偏差和程序行为误读。论文的问题是：能否在不训练新 judge 的前提下，用更多测试时搜索提高这种判断。

MCTS-Judge 将一次判断拆成由多种评估视角构成的搜索树，并用完全由 LLM 驱动的 simulated-execution 信号引导搜索。本 Track 相关的数据对象包括 MCTS state、被选 subtask action、文本分析、二元子判定、UCT 统计、自评决策、生成测试用例、模拟执行轨迹、terminal reward 和最终 Yes/No 判断。这是 evaluation-time feedback data，并非已发布训练语料。已确认的主要 artifact 是官方 arXiv v2 论文；目前未确认官方代码、生成测试数据库、轨迹 dump 或可执行环境，且论文限制部分仍把这些内容的发布写为未来工作。
