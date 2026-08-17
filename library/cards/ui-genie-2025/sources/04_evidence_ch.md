在作者自建的 RM benchmark 上，UI-Genie-RM 报告的总体 F1 为：步级评估 79.6、结果级评估 82.1。该 benchmark 从 AndroidControl、AMEX 和 AndroidLab 抽取正例，并用 agent 错误或轨迹破坏构造负例，因此它能检验论文提出的标签契约，但与训练来源和负例生成机制较为接近，不能视为对全部发布标签的独立审计。

在 agent 评测中，论文报告的 AndroidControl 成功率为：3B 的 low/high 分别是 93.8/72.9，7B 为 94.3/74.2，72B 为 94.8/77.0；动态 AndroidLab 成功率分别为 28.8、38.7 和 41.2。Android Arena 上，7B 模型的 functional success、LLM-judged success 和 ESAR 分别为 20.4、24.4 和 51.4；在 hard 与 multi-frame-query 子集上，前两种成功率都为 0.0。这些结果表明训练流程改变了 agent 行为，但不能证明每条合成样本都正确。

消融实验支持历史上下文和统一建模的选择：使用五张图并统一建模时，RM 的步级/结果级 F1 为 79.6/82.1，无历史时为 61.3/60.5。不过增益并不均匀；hard 步级 F1 在五图设置下为 68.7，低于三图设置的 71.5。best-of-10 推理对困难任务的改善也有限或不存在，例如 7B 的 hard task success 仍为 1.4，hard step 分数还从 61.1 降到 58.9。

发布证据虽不完整，但可以具体核验。RM Hub 仓库包含一个 2.16 GB JSONL，viewer 显示 472,769 行，字段为 `messages`、`images` 和 `positive`。Agent 仓库包含一个 74.35 MB 的 UI-Genie JSONL、按 2,208 个轨迹目录组织的 16,693 张截图，以及另一个 155.55 MB 的 `AMEX_Agent_34K.jsonl`，但数据卡没有解释它与命名发布的关系。NeurIPS 补充包只含 3 条示范轨迹的截图、XML 状态与 history JSON，属于示例材料，不是完整构造包。
