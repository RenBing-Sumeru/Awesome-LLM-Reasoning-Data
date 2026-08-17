本文的贡献是按题目难度控制最终接受的推理轨迹分布，而不是替换答案 checker。vanilla rejection tuning 为每题固定原始试验数，只保留其中通过验证的候选；DARS-Uniform 改为持续采样，直到每题达到 `k_u` 个已接受响应；DARS-Prop2Diff 则按难度分配已接受响应目标，最难题的上限为 `k_p`，同时尽量保证每题至少有一条合成响应。最终配方取 `k_u=40`、`k_p=192`，分别构成 DART-Math-Uniform 与 DART-Math-Hard（论文 §3.2–§3.3）。

难度由 DeepSeekMath-7B-RL 的失败率衡量。论文正文把它定义为错误响应占比，官方仓库将其落实为 `1-pass_rate`。该信号只控制增加多少采样，并不是训练时的 scalar reward。正则/SymPy 流水线能观察生成文本中可抽取的最终答案与参考答案，却看不到中间等式是否成立、rationale 是否忠实，或正确结果是否来自捷径。

最接近的基线是保留样本数同为约 590k、但每题原始预算相同的 vanilla rejection tuning（VRT）。MetaMathQA 是动机分析中的公开数据集，其已接受响应偏向更简单的 MATH 题；ToRA 与 MARIO 也曾通过增加采样改善覆盖。DART 的具体差别是显式设定每题最终保留数量的分布，并发布最终 SFT 集、已接受响应池与逐题采样统计；与 process supervision 不同，它的原生标签仍是答案级。
