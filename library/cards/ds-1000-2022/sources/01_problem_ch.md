一手来源是 arXiv:2211.11501（2022-11-18 提交）、官方 DS-1000 项目页和 `xlang-ai/DS-1000` 仓库。DS-1000 要解决的是 data-science code generation 的可靠评测：任务来自 StackOverflow 式真实用例，正确性依赖库行为和可执行测试，而不是只看文本相似。

一个样本是 Python data-science completion 问题，包含 prompt、code context、目标库等 metadata、参考解逻辑，以及 executable/string tests。benchmark 共 1,000 题，覆盖 Matplotlib、NumPy、Pandas、PyTorch、SciPy、scikit-learn、TensorFlow 七个库。它是可执行代码评测面，不是通用聊天 benchmark，也不是训练 recipe。
