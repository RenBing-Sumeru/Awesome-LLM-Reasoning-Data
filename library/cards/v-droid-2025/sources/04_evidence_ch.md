ArXiv v5 报告的端到端任务成功率为：AndroidWorld 59.5%、AndroidLab 38.3%、MobileAgentBench 49.0%；相对论文引用的先前最优结果，绝对优势分别是 5.2、2.1 与 9.0 个百分点（v5 摘要及第 6.2 节/图 9，第 9–10 页）。AndroidWorld 被视为域内，AndroidLab 与 MobileAgentBench 为域外，后两者所含 app 被排除在训练采集之外。这些是作者报告的 benchmark 结果，不是独立复现，也不是对训练偏好对的逐记录审计。

规模研究报告：累计偏好对从 9K、27K、55K 增至 110K 时，AndroidWorld 成功率依次为 15.0%、37.5%、47.4% 与 59.5%；在同一分阶段过程中，MobileAgentBench 从 17.0% 增至 49.0%（v5 第 6.3 节，图 12，第 11 页）。这一关联与后续轮次得到更强 verifier 相符，却不是纯粹的数据量效应，因为 app/任务多样性、人类与智能体标注比例、纠错策略和模型 checkpoint 也同时变化。因此，偏好对数量本身不能认证数据对的质量。

self-correction 消融中，加入抽样的 reverse-action 数据后，AndroidWorld 成功率从 52.2% 变为 59.5%，平均轨迹长度从 10.3 步变为 11.6 步（v5 第 6.2 节，图 11 讨论，第 11 页）。更长轨迹被解释为恢复能力增强，但方法部分同时给出明确负面结果：self-correction 数据过多会造成反复 back 的行为坍缩，因此将其限制在约 2.5%。该结果支持这一过滤选择，也说明看似正确的 reverse-action reward 仍可能扭曲行为。

entropy triage 有用但未经校准。以中位熵为阈值，表 1 报告 27K、55K、110K 三轮的正确性分类 accuracy 分别为 0.51、0.76、0.71；图 13 的 AUC 分别为 0.55、0.83、0.78。最终轮低于前一轮，因此基于不确定性的人工审核同时存在 false positive 与 false negative，不能作为单调的数据质量保证（v5 表 1，第 9 页；图 13，第 11–12 页）。

working memory 是关键实验依赖。LLM 构造 memory 时 AndroidWorld 成功率为 59.5%，rule-based memory 为 46.1%，只保留 action history 为 40.0%。当前实现使用 GPT-4，但未披露 snapshot 与设置（v5 第 6.4 节、表 4，第 12 页）。latency 也必须按版本解释：v5 报告每步总耗时 4.3 秒、每次 decision 约 0.7 秒，表 2 的 decision latency 为 0.74 秒，其中 GPT-4 memory 构造占 3.03 秒。v1/项目页/README 的“每步 0.7 秒”已经过时，其 AndroidWorld 优势 9.5 个百分点也已被 v5 的 5.2 个百分点取代。

论文失败分析列出 hallucinated decision、不准确 memory、规则提取动作空间不完整，以及纯文本输入无法理解图像/视频内容（v5 第 6.6 节，图 14，第 13 页）。这些结果支持 verifier-driven 设计在所报告 benchmark 条件下的表现，但不能证明未发布的 110K 条记录标注正确、已经去重、获得许可、完成隐私审查或能够回放。
