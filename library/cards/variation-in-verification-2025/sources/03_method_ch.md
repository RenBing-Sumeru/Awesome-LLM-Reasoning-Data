论文使用 4,444 道题：八个 benchmark 的 2,347 道数学题、从 MMLU-Pro 抽取的 1,196 道题，以及来自 ReClor、FOLIO 和 GPQA Diamond 的 901 道自然语言推理题。来自 Qwen、Llama、Gemma 与 Mistral 家族的 14 个开放 instruction-tuned models，加上 GPT-4o，均同时充当 generator 和 verifier。

对每个 model-problem pair，生成器以默认 temperature 0.7、top-p 1.0 采样 64 条响应；Qwen3 non-thinking 使用 top-p 0.8。发布记录给出 4,096 tokens 的最大长度。正确性先由 Math-Verify 判定，必要时使用其他 string-matching checkers，最后由 GPT-4.1-mini 与 Qwen2.5-72B 进行带参考答案的判断。

验证器评估从每个 64-response pool 中取最多 8 条候选，目标是 4 正确、4 错误；若某一类不足 4 条，则全部保留该类，并用另一类补足。验证器只看到问题和候选，不看到 gold answer；它以 greedy decoding 生成一条 rationale，并以 `[[Correct]]` 或 `[[Incorrect]]` 结束。RQ2 的附加比较还会限制可用题目、每类随机取一条响应以统一分母，重复 8 次后取平均。

官方 Generator card 报告约 619K 条候选记录。Verifier card 将其描述为 15-by-15 matrix、约 9.9M 条验证记录，但平台当前估算为 7,346,479 rows；这一计数差异仍未解决。
