**匹配训练前后对比，表 2。** 在 LongSeal、LongBenchV2、Oolong、OfficeQA 与 π²-Bench 上，同一个 GPT-OSS-20B base 在 low reasoning effort 下由平均 37.95 提高到 42.23，在 high reasoning effort 下由 48.90 提高到 53.22；训练只使用 922 条记录的 LoRA。每组内部模型、benchmark 集合和推理强度一致，因此支持小规模整理数据具有迁移效果。

**数据效率检查，表 3。** 只用综合质量评分最高的 100 条记录训练同一模型，low effort 平均分仍由 37.95 提高到 39.29，high effort 由 48.90 提高到 51.75。提升小于完整数据集，说明高质量单条记录有效，同时扩大到 922 条还带来额外覆盖。
