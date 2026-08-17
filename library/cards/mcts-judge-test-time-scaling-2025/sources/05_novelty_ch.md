直接 LLM judge 只生成一次整体判断；majority-vote baseline 执行固定视角集合；普通 MCTS 常用 UCT 以及 learned/self-evaluation reward。MCTS-Judge 把 action space 设为一组代码审查视角，在全局 UCT 之外增加基于当前历史的局部 LLM gate，并通过生成测试与重复逐行模拟执行构造 terminal signal。它不同于 execution-based verification，因为论文所述 reward mechanism 并未真正运行候选代码。

对本 Atlas 而言，方向信号是：只有完整保留搜索树与 reward provenance，judge search 产生的 state-action 和 trajectory-value 才能复用。测试生成与模拟执行分支尤为关键，因为 reward 的表面精度依赖这些步骤。MCTS、UCT、生成 unit test、majority voting 与 LLM self-assessment 都是已有组件；新意在于面向测试时代码判断的任务化组合。不能把 benchmark 提升转成对中间分析、生成 case 或 reward value 的统一质量标签。
