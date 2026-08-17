一句话概括其贡献：从 59,029 道题中选择 1,000 条兼顾困难、多样和部分高质量的 Gemini 推理记录，用普通 next-token SFT 微调 Qwen2.5-32B-Instruct，再通过强制或抑制 end-of-thinking delimiter，独立控制其 test-time thinking budget。

| 契约要素 | s1 对象或信号 |
|---|---|
| Source object | 来自 16 个数学、科学、代码、逻辑、填字或定量推理来源的带答案题目 |
| Trace author | 原始 s1K 使用 Gemini 2.0 Flash Thinking Experimental |
| Quality check | API 成功与字符串格式 heuristic；固定的 384 条 seed 要求 generation 被 judge 判对 |
| Difficulty check | Qwen2.5-7B 与 Qwen2.5-32B 尝试每道题；Claude 3.5 Sonnet 对照 source solution 判断尝试 |
| Diversity signal | Claude 3.5 Sonnet 分配 MSC 风格 domain；domain 内 rank 偏向更长 Gemini trace |
| Final object | source question/solution 加 Gemini reasoning 与 answer，选择为 1,000 条仅 train row |
| Post-hoc label quality | Claude 3.7 只把 53.6% 的最终 generation 判为正确 |
| Training use | 对 Qwen2.5-32B-Instruct 做五轮 supervised fine-tuning |
| Test-time control | 到 upper budget 时结束思考，或抑制停止并附加 `Wait` 要求继续思考 |

构造 contract 是 mixed 且依赖 judgment。programmatic logic 检查 8-gram overlap、exact duplicate、API 成功与 formatting pattern；Claude 判断 Qwen attempt 是否匹配 source solution，并标注 domain。这些信号能发现字面重叠、明显失败和相对于特定模型的难度，却不能证明 Gemini 的 intermediate reasoning、final answer 或 source solution 正确。长 trace 只是 sampling proxy，不是 verifier。

必须区分原始 s1K 与后续 s1K-1.1。**原始 s1K 使用 Gemini trace，并训练论文中的 s1-32B；s1K-1.1 复用相同 1,000 道题，但把 trace 替换为 DeepSeek-R1 输出，用于后续 s1.1 model。** 两者的 teacher、model、revision 和 license metadata 不能互换。

方向性贡献是 sample-efficient data selection 加最小 decoding intervention。budget forcing 不能证明计算越多越好：反复注入 `Wait` 可能导致 loop、overthinking、context exhaustion 和非单调 accuracy。
