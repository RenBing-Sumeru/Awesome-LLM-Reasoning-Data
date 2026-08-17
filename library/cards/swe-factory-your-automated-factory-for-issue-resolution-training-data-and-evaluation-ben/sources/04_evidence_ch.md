在 671 个、覆盖 4 种语言的 issue 实验中，GPT-4.1-mini 的 SWE-Builder 构造 269 个有效实例，平均成本 0.045 美元；Gemini 2.5 Flash 达到相近效果，最低成本为 0.024 美元/实例。exit-code grading 与人工检查一致率为 100%，自动 fail2pass 验证 precision 0.92、recall 1.00。

下游实验中，使用 SWE-Factory-Gym 微调 Qwen2.5-Coder-14B 后，issue resolution 从 5.8% 提升到 21.0%。这些结果支持工厂既降低构建成本又产生有效训练数据，但模型、数据量与训练设置共同变化。
