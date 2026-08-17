1. 在受控数据消融中，LLaVA-OneVision-mid 的七项 benchmark 平均分从 26.3 提升到使用 VisualWebInstruct 时的 38.1，而使用 LLaVA-CoT 时为 33.6；两者混合达到 39.7。对更强的 MAmmoTH-VL backbone，VisualWebInstruct 把平均分从 45.4 提高到 49.0，混合训练达到 50.4。

2. 最终的 7B MAmmoTH-VL2 在 MMMU-Pro standard、MathVista、MathVerse 和 DynaMath 上分别报告 40.7、68.1、42.6 和 55.7。这些结果支持该数据在已报告 backbone 与数据混合条件下的 SFT 效用，但不能把收益完全归因于网页检索，也不能证明每条公开推理轨迹都正确。
