第一类限制是 artifact 稳定性。视频基准依赖源视频是否仍可访问、是否下架、transcript 抽取、帧采样和音频支持。使用完整视频、采样帧、仅 transcript 或带音频输入，测到的能力可能不同。

第二类限制是污染和重叠。部分学科的 Adaptation 题来自 MMMU 和 MMMU-Pro，因此使用者要追踪与这些基准以及公开训练语料的重叠。视频和项目材料公开发布后，也会产生后续训练污染风险。

第三类限制是评估粒度。答案级正确性便于 benchmark，但不能直接说明模型是从视频中学会、调用了先验知识、靠选项猜测，还是借助 transcript shortcut。performance-gain metric 有帮助，但必须结合 prompt 设置和观看视频前基线解释。
