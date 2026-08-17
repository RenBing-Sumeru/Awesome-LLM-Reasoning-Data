1. OpenMath-CodeLlama-70B 使用 greedy decoding 时在 GSM8K 与 MATH 上分别为 84.6 和 50.7，MAmmoTH 的 Llama-2-70B 模型为 76.9 和 41.8；使用 50 次 self-consistency 后前者达到 90.8 和 60.4。这支持开放 teacher 轨迹的质量与多样性，但不同系统还改变了 base model 和训练配方，不能完全归因于数据。

2. 匹配的 Mistral-7B 消融单独验证两项数据决策。在同为 128K 条样本时，公平采样相对朴素采样把 GSM8K/MATH validation 从 74.3/35.0 提高到 75.3/37.0；掩码参考相对默认 prompt 则从 73.8/36.9 提高到 77.7/37.4。这支持提高覆盖率的 prompt 与逐题平衡选择，而不只是原始样本量。
