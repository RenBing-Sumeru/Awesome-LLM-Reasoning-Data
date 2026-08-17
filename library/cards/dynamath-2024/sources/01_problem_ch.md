一手来源是 arXiv:2411.00836（2024-10-29 首次提交，2025-02-24 v2）、官方 DynaMath 项目页和 GitHub 仓库；arXiv 记录标注 ICLR 2025 接收。DynaMath 要评估的是 VLM 在同一数学问题的视觉/文本变体下能否稳定复用推理，而不是只解一个静态样本。

一个数据对象是由 Python program 表示的 visual-math seed question，它可以生成改变数值、函数图、颜色、符号、几何或真实语境的 concrete variants。验收面是模型对生成图文题的答案，与程序生成的标准答案比较，并报告 average-case 与 worst-case accuracy。它是动态多模态数学鲁棒性 benchmark，不是静态 VQA 数据集，也不是训练语料。
