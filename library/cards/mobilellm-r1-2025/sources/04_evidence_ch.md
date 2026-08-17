证据最能支持的是配方的模型结果与组件消融，而不是每条入选记录的质量。

- **混合与筛选信号。** Figure 4 显示，在论文构造的 code、math、knowledge 评测聚合上，influence-derived 预训练配比的 perplexity 曲线低于 uniform sampling。Figure 6 显示，不论是否使用 8B teacher，positive-influence 中训练子采样的 MMLU 曲线都高于原始混合。这些是作者报告的曲线；官方仓库没有发布可供独立重放的数据筛选实现。
- **后训练顺序。** Table 1 中，先 Tulu-3、后 math/science/code reasoning SFT 的分阶段方案报告 MATH 57.8、GSM8K 68.5、LCBv6 13.7、MMLU 44.0；联合训练分别为 56.2、53.1、14.9、44.0。分阶段训练改善了报告中的数学成绩，但没有在 LCBv6 上全面占优。
- **受控 final-SFT 对比。** 在相同联合推理 SFT 上训练一个 epoch 后，949M checkpoint 报告 MATH 57.8、GSM8K 68.5、LCBv6 13.7；OLMo-2-0425-1B-SFT 为 53.0/58.8/11.4，SmolLM2-1.7B-Instruct 为 41.4/50.5/7.4（Table 2）。该对比支持更早训练阶段有贡献，但架构与优化器差异仍可能是混杂因素。
- **最终 checkpoint。** 按 Table 9 的 zero-shot protocol，MobileLLM-R1-950M 报告 MATH500 74.0、GSM8K 67.5、AIME'24 15.5、AIME'25 16.3、LCBv6 19.9；Qwen3-0.6B 分别为 73.0、79.2、11.3、17.0、14.9。结果随任务而异，并非全面更高。
- **成本。** 附录 D.3 报告 representative-set 构建、influence 计算和 leave-one-out 消融约耗费 6,800 GPU-hours，模型训练另耗费约 38,600 GPU-hours。即使最终模型不足十亿参数，数据选择流程仍有显著计算成本。

Benchmark 表现只能说明训练后 checkpoint 在报告设置下的结果，不能证明数据混合无污染、许可统一或筛选最优。本 Card 不声称这些结果已被独立复现。
