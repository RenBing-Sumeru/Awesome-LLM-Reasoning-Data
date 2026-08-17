SimpleQA 问的是一个很窄的 factuality 问题：语言模型能不能答对短事实问题，不能确定时能不能不作答。主来源是 OpenAI 2024 年论文 “Measuring short-form factuality in large language models”，官方 evaluator 在 `openai/simple-evals`，公开数据是 OpenAI 托管的 CSV。

边界要放在第一位。SimpleQA 不是长文本 factuality 评估，不评估 retrieval grounding，不包含多跳工具环境，也不是训练配方。它把 factuality 收缩到短问题、单一答案、答案稳定、可证据支持的设置中，从而让输出可以被一个紧凑的三分类契约验收。

一个评测对象是 CSV 的一行：metadata、question、reference answer。一次运行会补上模型回答，再由 evaluator 标成 CORRECT、INCORRECT 或 NOT_ATTEMPTED。它的价值在于把错误事实回答和谨慎不作答分开看，而不是把两者都吞进一个 accuracy。
