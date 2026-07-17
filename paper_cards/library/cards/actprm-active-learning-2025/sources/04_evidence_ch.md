在 10 万条候选池实验中，ActPRM 只用一半标注预算就在 ProcessBench 上达到 0.673 的 F1，与全量数据微调相当；在同为 50% 预算时，比随机选择高 3.3 个百分点。预算增至 62.5% 时，其 F1 达到 0.680。

在扩展实验中，ActPRM 报告的 ProcessBench 平均 F1 为 0.750，ActPRM-X 为 0.760；论文表中 Qwen2.5-Math-PRM-7B 和 Universal-PRM 分别为 0.735 与 0.743。在 PRMBench 上，ActPRM-X 报告 0.667；消融实验还显示，同时采用偶然与认知不确定性选择优于单独使用任一信号。
