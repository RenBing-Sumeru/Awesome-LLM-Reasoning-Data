此前不少代码模型评测依赖 next-token loss、代码相似度或不统一的编程题。HumanEval 的变化是把质量信号改成可执行功能正确性，并发布一组小规模、手写的 Python 题和测试。

方向信号是从文本重合转向运行验收。不是新东西的是单元测试、Python 编程题、多次采样。复用前要检查官方仓库 commit、测试可见性、是否使用 EvalPlus 式扩展测试、沙箱安全、timeout policy，以及公开发布后的 benchmark contamination。
