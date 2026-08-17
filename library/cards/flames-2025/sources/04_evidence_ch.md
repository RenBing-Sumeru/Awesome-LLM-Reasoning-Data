最有信息量的证据是受控数据管线消融，而不是 headline model comparison。

| 实验 | 条件与结果 | 可支持的解释 | 边界 |
|---|---|---|---|
| 质量控制，表 1 | DeepSeek-Math-7B；150K 个 Suggester-Editor candidates；每题 3 条 Qwen solution。变覆盖率平均分：Strict 69.7（45K）、Majority 72.0（90K）、First 73.0（150K）、Majority+First 73.7（150K）。固定 45K 时为 69.7、69.1、69.6、69.8 | 覆盖率可能压过严格过滤；相同规模下 precision 仍有帮助 | 被保留的 first solution 可能错误；benchmark average 不是 label validity |
| Solvability 失败，表 12 | Qwen solvability filter 在人工 MATH500 中接纳 349/500（69.8%）；level-5 只接纳 68/134（50.7%） | 被测 filter 存在强烈的随难度增加的 false rejection | 该实验审计 false negative，并未测合成题上的 false acceptance |
| Agent 对比，表 2 | 同为 150K、同一 student：Suggester-Editor 平均 57.4，IQC 56.9；Taxonomy Key Concepts 在单 agent 中 CollegeMath 最高为 40.9；Distraction Insertion 的 distraction score 最高为 72.4 | 不同 agent 目标改变不同评测维度 | 没有一个 agent 在所有指标占优 |
| Mixture，表 11 | FLAMES Small（50/20/20/10）取得 GSM8K 85.2、MATH5K 60.0、CollegeMath 41.4、distraction 72.2、GSMPlus 74.7、OlympiadBench 26.1，平均 57.5 | 所选 mixture 在报告评测面上较均衡 | mixture 由同一组用于刻画它的 benchmark suite 选择 |
| 规模对比，表 3/9 | DeepSeek-Math-7B：refreshed ScaleQuest 平均 60.0，FLAMES Large 61.7，FLAMES XL 65.8 | 扩展所选配方提升报告平均分 | dataset records 与独立复现不可用 |
| 跨 student 迁移，表 4/10 | FLAMES Large/refreshed ScaleQuest 平均分：Qwen2.5-Math-7B 69.5/69.2，Mathstral-7B 61.1/59.0，Mistral-7B-v0.3 57.5/54.8，Qwen2.5-14B 67.4/66.2 | 增益在被测 students 间迁移 | 并非所有单项都提升，例如 Qwen2.5-Math-7B 的 OlympiadBench 为 40.9 vs 41.3 |
| Teacher 消融，表 5 | 在 50K Suggester-Editor 数据上，更换 problem generator 使 MATH5K 56.4→54.9；更换 solution teacher 使其 56.4→49.3 | 在该比较中，teacher solution quality 是重要管线因素 | 只涉及一个 agent、scale 与 student，不能推广为普适因果排序 |

以上均为作者报告结果。Checkpoint 以 GSM8K 与 MATH 最高平均分选择，使这两个报告测试指标也参与模型选择。官方页面没有可下载 FLAMES records、已发布 checkpoint、精确 run manifest 或独立复现。因此这些结果支持一套有用的受控 recipe study，不能证明逐记录正确性、彻底去污染、许可证完备或公开 artifact 完整。
