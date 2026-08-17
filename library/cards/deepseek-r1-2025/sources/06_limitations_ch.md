发布的权重、代码、报告和 distill checkpoint 没有发布 cold-start prompt、60 万/20 万 SFT 材料、80 万条 R1 行、RL rollout、接受/拒绝候选、教师、来源 manifest 或 item-level lineage。报告中的数量不能证明唯一样本数、provenance、权利，或从来源 item 到最终蒸馏输出的映射。

规则 reward 即使在最终答案通过时也可能接受有缺陷的推理。后续 DeepSeek-V3 judgment 和通用 reward model 没有配套 prompt 模板、版本、校准、错误率或对抗评估。任务 extractor、compiler、测试 harness、终止谓词、reward 公式、系数、优化器设置、采样分配和训练预算也未披露。

报告指出 R1-Zero 存在可读性和语言混杂问题，R1 存在超出中英文的语言混杂，以及比 V3 更弱的 function calling、multi-turn、roleplay 和 JSON 表现。没有公开切分、去污染程序、残余重叠结果或不可变版本账本来支持对这些风险的独立审计。
