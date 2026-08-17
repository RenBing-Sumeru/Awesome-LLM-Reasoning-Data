ACL Anthology 最终记录显示，MT-RewardTree 发表于 Findings of EMNLP 2025（2025 年 11 月，第 18556–18567 页）。论文针对的具体缺口是：机器翻译 process reward model 缺少一套有文档依据的细粒度 token 偏好生成流程，也缺少用于检验 reward model 能否正确排序这些偏好的 MT 专用评测面。它属于 `rollout_search_test_time_trace_data`，因为每条保留偏好都经过多次翻译 rollout、learned metric 打分和 token 分支搜索；selector 与预算是数据对象的一部分，而非无关紧要的推理参数。

对于来自 WMT17–WMT20 test data 或 FLORES development/test data 的一条源句，TowerInstruct-7B-v0.2 生成共享翻译前缀、top-2 下一 token 兄弟分支，并从每个分支采样三条以 EOS 结束的完整 rollout，再由 COMETKiwi 导出的 value 选择较优分支。公开的 prefixed release 更窄，只保存 `instruction`、`input`、`chosen`、`rejected`、`chosen_score` 和 `rejected_score`；相应 benchmark 不含 `input`，arbitrary variant 比较的完整翻译不要求保持同一兄弟前缀关系。原始 tree node、全部六条 rollout、被丢弃分支、显式 prefix/token 标识和平均 node value 均未发布。

本 Card 不把 COMETKiwi 标签视为人工 ground truth，不声称未发布的搜索树可以复用，也不把论文用途扩展为 RL training——作者将 RL 集成列为后续工作。最终 ACL 论文、作者项目页、四个官方 dataset repository 和两个 model repository 足以支持 L4；但由于 score 语义、原始树谱系、分组切分、去污染、代码版本和若干许可仍未解决，条目状态保留为 `partial`。
