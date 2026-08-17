这篇 Deepchecks arXiv v1 论文发布于 2026-05-14，处理 AI agent 评测里的失败诊断缺口：outcome metric 只能说 trace 成功或失败，单次 monolithic LLM judge 又很难在长而结构化的 trace 里准确定位错误发生在哪里、是什么类型。

评测对象是 OpenTelemetry 风格的层级 agent trace，由 LLM call、tool invocation 等 span 组成。反馈契约是 span-level 和 trace-level diagnosis，再与 TRAIL 在 GAIA、SWE-bench trace 上的标注比较。它属于 agent trajectory evaluation / diagnostic scoring，不是新的 agent benchmark 或训练数据 release。
