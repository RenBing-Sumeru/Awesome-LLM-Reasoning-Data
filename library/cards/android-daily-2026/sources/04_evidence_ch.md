在 350-task benchmark 上，Gemini 3 Flash 报告最高整体成功率 62.0%，每步耗时 14.7 秒；面对最多 2 个约束的任务时成功率为 69.4%，面对 3 个及以上约束时降至 58.0%。Gemini 3 Pro 在最多涉及 1 个应用的任务上为 63.0%，涉及 2 个及以上应用时降至 41.9%。这些 pass@1 slice 说明论文实机协议下的约束复杂度与跨应用复杂度敏感性，但没有 multi-seed 方差或独立复现（论文 Table 2；第 4.2 节）。

GRADE 的可靠性以 879 个 baseline session 为样本，并以经过三轮标注校准的人工审查为 ground truth。使用 Gemini 3 Pro 时，完整 GRADE 的准确率为 87.37%，其中 TP 188、TN 580、FP 86、FN 25。仅 Evidence Layer 时准确率为 84.76%、FP 106；加入 Verdict Layer 后准确率提高且 FP 降至 86，只能据此支持“结构化 verdict 检查改善该样本上的 evaluator”这一较窄结论（论文 Tables 3 与 5；第 4.3 节）。

Evaluator 明显依赖 backbone：同一组 879 个 session 上，GPT-4o 的准确率为 65.64%，Gemini 3 Pro 为 87.37%，FP 则从 279 到 86。对 100 个视觉歧义 session，5 名非专家 rater 在无 guideline 时各自与校准 ground truth 的一致率为 49-60%，有 guideline 时为 56-67%；GRADE 达到 72-73%。Guideline 同时帮助人类与 GRADE，但这些结果都未消除判断歧义（论文 Tables 4-5；第 4.3 节）。

论文对前三个 frontier 模型和前三个 GUI 专用模型的全部失败 session 进行人工归类，并识别出 latency timeout/click misalignment、memory-induced loop 与 protocol-induced visual-capability degradation，但没有报告各失败类别的精确数量（论文 Figures 5-6；第 4.4 节）。Benchmark 分数与 evaluator 一致率只说明报告协议下的行为，不能证明任务集逐项正确、数据质量可无限制复用、发布完整、因果归属成立或适合安全训练复用。
