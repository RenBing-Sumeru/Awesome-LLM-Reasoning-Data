启用 Search 的 Tongyi 在六个完整数据集上都高于关闭 Search 的版本，但 post-hoc split 说明增益不能统一归因于检索。BML-only 并不稳定提高表现：六个 benchmark 中四个更好、两个更差。直接答案暴露则不同；BML 内含 EAL 的组通常准确率更高，三种污染同时出现时五个数据集为 100%，MedMCQA 为 90.16%，但部分组样本很小。

turn 对齐变化更明显。EAL 后准确率从 MedQA 7.69%→89.74%、MMLU 17.86%→82.14%、MedMCQA 19.25%→79.45%、MedXpertQA 8%→48%、HLE-149 20%→100%、Medbullets5op 0%→80%。EAL 到正确 prediction 的 Cox hazard ratio 为 2.20–8.92；BML/QCL 效果混合。QCL 在多数数据集提高后续 EAL hazard，ratio 为 2.50–6.74。

泛化检查表明风险取决于 corpus overlap，而非简单的 open/curated search 二分。MedQA 前 100 题 leakage：Gemini 60%、Step 9%、Valyu 0%；但 Valyu 测试其 search 支持来源的 PubMedQA 时，100 题中 65 题泄漏。摘要称 HLE 生物/化学子集最高产生 4% inflation。这些是 live、非随机检索下的关联，不是受控答案注入的因果估计。
