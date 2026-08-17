1. **汇集偏好数据。** 作者组合 UltraFeedback、Magpie、Skywork-Preference、Synthetic-IF、MegaScience、Medical-o1；已有 chosen/rejected 直接复用，部分科学与医疗题由开源模型生成候选、奖励模型集成形成优劣对。

2. **生成准则。** 指令模型读取 prompt、排序回答和偏好信号，经 CRG 生成硬规则与原则。

3. **以一致性过滤。** 同一模型拿 rubric 判别诱导出的回答对；只有组内准确率至少为 0.5，且单个对的判决等于已知标签，rubric 与该样本才保留。

4. **训练与推理。** 生成器经 SFT 从 prompt 输出 rubric；RUBRIC-RM 经 SFT 用 prompt、回答对、rubric、标签预测 A/B。推理时先生成或复用缓存 rubric，再判决。

复现需固定源数据版本、提示词与模型、0.5 阈值、切分、Qwen3 checkpoint、基准脚本；公开发布页许可须另行核验。
