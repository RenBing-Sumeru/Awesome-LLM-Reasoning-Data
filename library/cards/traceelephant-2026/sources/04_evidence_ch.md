发布包本身是最直接的数据证据。Table 1 报告 380 次清洗后执行和 220 条失败，五个 system-task 组合的失败数分别为 73、12、74、17 和 44；在固定的 2026-06-02 Hugging Face revision 上只读检查 ZIP central directory，又独立确认了 220 份 `trace_metadata.json` 与 220 份 `step_records.json`。这证明当前数据包的数量和组织方式，但不等于穷尽核验每个 JSON 字段，也不证明可以确定性回放。

关于归因质量，Table 2 报告在提供 ground truth 时，Static Agentic 的平均 agent accuracy 为 65.9%，step accuracy 为 30.3%；Dynamic Agentic 分别为 66.7% 和 33.3%。Table 3 的可观察性消融去除 metadata 与输入后，All-at-Once 的 agent/step accuracy 从 0.62/0.28 降至 0.51/0.16，Static Agentic 从 0.66/0.30 降至 0.54/0.17。这些是作者报告的评测结果，不是独立复现，也不能证明标签具有确定性。

标注证据同时显示不确定性：共识前 Krippendorff's alpha 在负责 agent 标签上为 0.72，在决定性 step 标签上为 0.64。完整可观察性有助于论文评测的归因方法，但 benchmark 性能不能证明数据质量、schema 完整性、license 兼容性或回放保真度。发布的 `evaluate.py` 还对 agent 与 step 采用 substring containment，因此应以规范化 exact match 和回归测试重新核查报告准确率。
