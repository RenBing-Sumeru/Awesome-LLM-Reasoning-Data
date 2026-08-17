官方论文记录了 500K-query 的初始设置、每题 6--8 条 candidate responses、每步 8 次 continuations、Qwen2.5-72B-Instruct critic、按 error location 一致性过滤，以及报告中的 retention 示例。它还说明发布了 7B 和 72B PRMs，官方 Qwen model cards 提供可执行的逐步 scoring interface。

论文同时评估 response-level Best-of-N 和 step-level ProcessBench。它报告 MC-trained PRMs 在 Best-of-N 中可能看起来更有利，却在 process-error localization 中表现更差；在其比较中，人工标注或 LLM-as-a-judge 展示出更强的 step-level generalization。这些是作者报告的实验，而不是其训练语料发布或独立 verifier 审计。

model cards 证明公开工件是采用 Qwen license 的 PRM checkpoints。它们并不证明 golden-answer queries 的来源、生成 traces 的权利、answer-match 的正确性、critic calibration 或 consensus filtering 的可复现性。
