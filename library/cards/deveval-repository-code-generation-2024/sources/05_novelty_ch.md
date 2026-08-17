基线是孤立代码生成或竞赛式评测：题目通常是短 prompt 加测试，很少要求真实项目上下文。DevEval 的新意在于把对象改成仓库内生成，显式记录文件位置、参考依赖、原始代码和项目测试。

方向信号是从 standalone snippet 走向面向代码智能体的 repository execution surface。质量信号是人工标注，以及公开的 prompt、metadata、dependency data 和评测脚本。不新的是 Pass@k、单元测试执行和补全式 prompting。复用前要检查 license、源仓库再分发权、测试充分性、ground-truth 自测失败样本、依赖漂移，以及论文和发布工件的样本数差异。
