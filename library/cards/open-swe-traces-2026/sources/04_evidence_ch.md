官方数据集与论文一致报告九种语言、207,489 条轨迹；四种模式的数量精确相加为该总数。数据卡的 outcome 表可汇总为 65,244 条 resolved、95,487 条 unresolved 和 46,758 条 unknown。因此，65,244/207,489 为 31.4%。论文约 40.6% 的 pass rate 只有在排除 unknown 后才能复现：65,244/(65,244+95,487) = 40.6%。这一分母区别直接影响采样与审计。

论文还报告了具体轨迹形态差异。在 OpenHands 中，non-thinking 与 thinking 模式平均每条轨迹分别有 94.08 和 58.22 个 assistant turn；在 SWE-agent 中分别为 130.70 和 74.82。Thinking 轨迹每个 turn 使用更多 token，因此不能在缺少更多证据时把较少 turn 直接解释为较低总计算量或更高语义质量。

Table 5 是作者设定下保留非成功数据最直接的证据。从 resolved-only 切换到完整语料时，SWE-bench Verified 的 thinking 分数由 55.3 升至 58.1，non-thinking 由 57.7 升至 59.8；SWE-bench Multilingual 则分别由 40.5 升至 47.6、由 49.6 升至 57.1。完整双模式模型报告的最佳结果为 SWE-bench Verified 61.7%、SWE-bench Multilingual 57.1%、SWE-bench Pro 36.8%。这些是下游 ablation，不能证明每条 unresolved 或 unknown 记录都正确、安全或没有污染风险。

公开产物对“可获得性”的证明强于对“可重放性”的证明。HF Viewer 报告 207,489 行、18,338,420,390 bytes Parquet、十个顶层字段、四个已完成的来源模式 split，且无需 gated access；核验时当前 revision 为 `9c0e4579a4ee0effa3e5f7a552494a045f29377d`。但公开 schema 不包含 container hash、任务 commit、测试日志、教师解码设置或逐行淘汰原因。
