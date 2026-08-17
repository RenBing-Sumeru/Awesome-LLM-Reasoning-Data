工件证据确定了下面这份公开数据账本：

| 文件 | 行数 | 空白归一化后的精确重复行 | 唯一 prompt 字符串 |
|---|---:|---:|---:|
| Original | 56,878 | 2,503 | 54,375 |
| Extended | 72,444 | 24,025 | 48,419 |
| Hard | 13,451 | 611 | 12,840 |

重复数来自 curator 对 commit `3fdd9a07b4fb01e06005e6e74fc56690cde8a341` 下完整官方 JSON 文件的测量，不是作者报告。它表明名义行数与唯一 prompt 数有显著差异，尤其是 extended 文件。由于记录缺少源和重复组 ID，重用者无法判断重复来自上游重复收集、刻意加权还是意外聚合。

精确字符串比较发现，`orz_math_72k_collection_extended.json` 与仓库中的 `eval_data/math500.json` 共享六个归一化 prompt。配置实际使用的 original 57k 与 MATH500、AIME2024、GPQA Diamond 均无精确重合；三个公开训练文件与 AIME2024、GPQA Diamond 也没有精确重合。这是**发布表面的风险**，并非某个报告 checkpoint 用这六条 MATH500 训练的证据：公开配置使用 57k，而论文描述后续 129k 筛选，却没有不可变运行清单。

NeurIPS 终稿报告 ORZ-32B 在 AIME 2024、AIME 2025、MATH500 和 GPQA Diamond 上分别为 48.1、36.0、92.2 和 55.5，还报告 mixed-domain transfer 与模型规模结果。这些都是作者报告的系统结果，不能独立证明 prompt 语料已经去污染、正确授权、去重或完整绑定 checkpoint。

失败分析有价值，但没有作为数据发布。ORZ-7B 对比中，GRPO 在约第 240 步出现不稳定，截断与重复指标接近 1.0；PPO 在报告实验中保持稳定。英语+中文数据也不如纯英语设置。审计这些发现所需的响应流、语言标签、过滤记录、失败 GRPO checkpoint 和不可变日志均缺失。

工件验证仍然是实质性的：官方代码、Dockerfile、配置、prompt 数据集、policy 权重、critic 权重、项目页、仓库许可证和 NeurIPS 论文都存在。但它不能升级缺失的 run-level 数据或上游权利血缘。
