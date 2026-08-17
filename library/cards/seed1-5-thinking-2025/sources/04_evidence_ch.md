官方 arXiv 报告识别出四类任务，并说明其对应的检查、verifier 或 reward model。它报告约 10 万个清理后的 STEM 任务、约 1 万个谜题问题，以及由 30 万可验证和 10 万不可验证样本组成的 40 万 SFT 混合。这些是报告中的构造数量，不是公开的数据发布，也不是唯一 item 的 manifest。

报告还描述了 Seed-Verifier、Seed-Thinking-Verifier、代码测试或 checker、谜题 verifier、成对生成式 RM，以及后续的统一 long-CoT RL。这支持将其记录为混合反馈契约。但相应 artifact 与评估日志不可用，因此无法证明每个反馈组件的强度、校准、假接受率或可复现性。

证据支持“部分披露”的判断：论文具体说明了数据族和反馈接口，但来源比例、许可证、切分、去污染、RL rollout 数、解码设置以及可复用数据或代码仍不可用。
