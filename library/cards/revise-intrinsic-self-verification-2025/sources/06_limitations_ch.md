结果标签可能把含错误中间推理、伪计算或幸运答案提取的路径标为正确，也可能漏掉有效替代形式。由于监督位于 path 级，把该构建称为“过程监督”会夸大证据。内在 `eos` 概率从这些标签学习，也会继承相应错误。

Stage 2 在 `refine` 动作后提供监督 gold reasoning，而不是要求模型自行发现修复。这可以教授纠错格式，却不能证明模型检测到的错误因果性地导向 gold solution。MBPP 还继承外部模型生成与单元测试筛选限制，包括测试不完整和 teacher artifact。

精确数据版本、分来源 prompt/path/pair 数、拒绝样本、答案提取器、采样预算、随机种子、污染检查、训练/评测重叠、pair 发布、checkpoint 与转换数据许可均为 unknown。还需检验分布变化下的置信度校准，并与 retry/search baseline 做等预算比较。
