发布完整性是主要限制。公开的 159,136 条平衡数据不是论文报告的 638K 前体池。它没有原始候选生成、格式失败、裁判分歧、异常输出、重试历史、被拒合成变体，以及每行第二份 Qwen/Grok 判断。由于只保留一个 LLM 标签和理由，定义真实假阴性的双裁判共识无法逐行独立复核。

实验绑定不完整。公开困难提示池有 7,009 条，大于 GRPO 实际抽样的 5,000 条，但抽样 ID 与随机种子缺失。代码没有命名的 paper release，也没有把代码、数据、提示、模型、环境和结果绑定起来的 manifest。当前 SFT launcher 使用 cutoff 2,048、每设备 batch 64、gradient accumulation 2，而论文与 model card 对应值为 4,096、8、8。当前 GRPO launcher 对两个基础模型都使用 response length 4,096，论文却为 Qwen2.5-Math-7B 报告 3,072。

评测没有单独刻画验证器质量。三个公开数据集都只有 train split；没有 source-disjoint 验证器 validation/test set，也没有 precision/recall、false-positive rate、calibration、abstention 分析或 confusion matrix。HardVerify 在论文中由 115 条 Olympiad 加 10 条 MATH 构成，工件中却是 110 条 Olympiad 加 15 条 Math_500。难度阈值旨在分隔 Big-Math benchmark 一半与 RL 提示池，但没有覆盖所有评测集或预训练数据的完整精确与语义重叠审计。

许可证边界分裂。代码仓库声明 MIT，检查点页面声明 Apache-2.0，论文将上游 Big-Math-RL-Verified 描述为 Apache-2.0；但三个 TinyV 数据集页面都未声明 dataset license，也没有源级 attribution 与兼容性账本。公开可访问并不能证明数据具有可复用权利。隐私和同意审查情况也是 unknown。

终局契约只检查提取出的最终答案。它不能发现推理过程无效但碰巧得到正确结论的情况，学习式判断的假阳性还可能奖励错误解答。合成等价生成也可能意外改变语义。现有证据只覆盖数学答案验证与 GRPO，而且 TinyV 并非在每个 benchmark 与基础模型组合上都更好。
