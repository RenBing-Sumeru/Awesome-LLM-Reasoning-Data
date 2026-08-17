报告结果证明已研究的 Llama 3.1 8B 流程得到改进，但不能认证每条合成记录。

- 在 MBPP 上，代码 pass@1 从 38.60 提升到 Iter 3 DPO 后的 41.00，相对变化 6.17%；test-output accuracy 从 42.68 升到 51.76，false-positive rate 从 12.75 降到 9.60。
- 在 LiveCodeBench 上，代码 pass@1 从 18.23 升到 27.24，相对变化 33.08%；test-output accuracy 从 20.14 升到 41.50，false-positive rate 从 20.76 降到 18.63。
- 摘要中的平均代码提升 19.63% 是两项代码相对增益的均值。其 test-generation 提升 17.49% 对应 Table 1 中 false-positive-rate 相对下降的均值（MBPP 24.71%、LiveCodeBench 10.26%），不是 accuracy 相对增益均值；workshop 页面把该数字称作 accuracy 提升，因此引用时必须注明指标。
- Base-model 分析说明不能默认生成测试可靠：在 MBPP 上，即使加入 CoT 与 majority voting，用 synthetic tests 重排代码也把 pass rate 从直接代码生成的 38.60% 降到 35.00%。
- Scoring 消融把默认 12,525 条选择数据放宽到最多 25,525 条，但最大集合在 MBPP 和 LiveCodeBench 上都更差。这支持论文在当前设置内关于 execution-selection rule 重要性的论点，却不能证明每条默认记录正确。

这些结果都是聚合 benchmark 或 error-rate 指标，不能直接把每条生成 problem、code solution、unit test、chosen pair 或 rejected pair 标成语义正确。没有公开 artifact 可用于核对记录数、重建 split，或把训练样本连接到具体报告结果。
