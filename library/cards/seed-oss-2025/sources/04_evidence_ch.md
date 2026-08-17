官方仓库与 model card 把 Seed-OSS 标为 2025-08-20 的 ByteDance Seed 发布，而不是论文。官方 Hugging Face collection 包含 Base、Base-woSyn、Instruct 三组 36B checkpoint，每个官方模型页均标为 Apache-2.0。

Model card 的 Training Data 部分报告 12T pretraining tokens、三类来源与 2024 年 7 月 knowledge cutoff。同一 model card 命名 deduplication、desensitization、quality/CSAM/toxic-content filtering，以及算法和人工 PII 检查，但不提供各类 token 总量或 manifest。

仓库 base-model 表给出 synthetic-augmented 与 woSyn 权重的对比。例如 Base 在 MATH 为 81.7 vs 61.3、MBPP 为 80.6 vs 74.6；woSyn 在 GPQA-D 为 35.2 vs 31.7、SimpleQA 为 7.4 vs 5.8。这些只是 release table 中的单次对比，没有 matched-training 文档、不确定性或显著性。

Thinking Budget 部分定义序列化与行为：无 budget 默认 unlimited reasoning，0 请求直接回答；正预算推荐使用 512-token 倍数，因为这些区间得到广泛训练。示例含名为 `seed:think` 与 `seed:cot_budget_reflect` 的字段，但不披露 budget-training distribution 或 verifier。

Instruct evaluation table 报告的结果包括 AIME24 91.7、AIME25 84.7、LiveCodeBench v6 67.4、IFEval 85.8、TAU1-Retail 70.4、TAU1-Airline 46、SWE-bench/OpenHands 56、SWE-bench/AgentLess 47、Multi-SWE-bench 17、RULER-128K 94.6、AIR-Bench 75.6。这些都是作者报告且依赖 scaffold，原始 output 与 harness pin 未打包。

发布明确称 ArcAGI-V2 官方 evaluation set 未用于训练。这只是狭窄的 negative-membership 声明，不能推广到其他 benchmark。评测 sampling 使用 temperature 1.1/top-p 0.95，TAU-bench 例外为 1/0.7；这些是推理设置。
