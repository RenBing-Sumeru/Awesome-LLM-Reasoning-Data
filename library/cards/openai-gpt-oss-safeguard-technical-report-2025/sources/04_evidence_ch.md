技术报告给出的内部多策略准确率为：gpt-oss-safeguard-120b 为 46.3%，gpt-oss-safeguard-20b 为 43.6%；相应的 gpt-oss 模型分别为 32.5% 和 32.1%。在报告所述的 OpenAI Moderation (2022) 评测上，两个 safeguard 模型的 F1 均为 82.9%；其报告的 ToxicChat F1 分别为 79.3% 和 79.9%。

这些数值展示的是报告评测设置下的性能，而不是底层训练的完整性或可审计性。OpenAI 明确说明，多语言和聊天安全评测并不直接评估模型在给定策略下的分类。内部策略集、golden labels、LLM graders、策略修订以及大多数评测工件均未发布。

