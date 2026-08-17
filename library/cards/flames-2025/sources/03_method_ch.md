可重建流程如下。

1. **任务来源。** Seeded agent 从 GSM8K 与 MATH training split 取样。标准 150K agent dataset 通常以两个来源各生成 75K 条经过去重和过滤的 unique problem 为目标。Taxonomy-Based Key Concepts 改从多个已引用数学 taxonomy 的整理组合出发；QFT 在 question fine-tuning 后生成，也不在 prompt 中给定具体 seed example。
2. **生成题目。** Qwen2.5-32B-Instruct 运行 12 个 agent 之一：Few-Shot、Paraphrasing、Key Concepts、Seeded Key Concepts、Suggester-Editor、IQC、Ask Me Anything、Self-Verification、FOBAR、QFT、Taxonomy-Based Key Concepts、Distraction Insertion。它们在输出新题前可能产生 key concept、edit plan、composed question、statement、reverse question 或 irrelevant detail。
3. **去重与去污染。** 对题目做 exact-match deduplication。若一道合成题包含某道 GSM8K 或 MATH test problem 至少 95% 的 8-grams，则将其删除。该规则是 lexical filtering，不是 semantic decontamination；论文也没有报告 CollegeMath、GSMPlus 或 OlympiadBench 的同类控制。
4. **生成解答。** Qwen2.5-Math-7B-Instruct 写 worked solution。题目与解答生成均使用 temperature 0.7、top-p 0.9、top-k 50、repetition penalty 1，最多生成 2,048 个新 token。
5. **研究质量控制。** 六策略比较为 150K 道 Suggester-Editor 题目各生成三条 solution。Strict Self-Consistency 要求三条答案一致；Majority 要求至少两条一致；Solvability+RM 结合 Qwen solvability judgment 与 InternLM2-7B-Reward ranking；其他变体把过滤器与 first solution 组合。`First` 保留全部问题和第一条 solution。后续 FLAMES 构造使用 `First`，因此三样本 self-consistency 不是每条最终记录的字段或准入条件。
6. **构造 mixture。** 按 50% Suggester-Editor、20% IQC、20% Taxonomy Key Concepts、10% Distraction Insertion 混合。论文定义 FLAMES Small（150K）、Large（1M）与 XL（1.5M）。
7. **训练与选择。** 受控 scaffold 在一个 Amazon EC2 P4 instance 的 8 张 A100 GPU 上做 full-parameter SFT，使用 DeepSpeed ZeRO-3、batch size 4、训练 5 epoch、保存 10 个 checkpoint，并采用 SWIFT 默认超参数。主要 student 是 DeepSeek-Math-7B；迁移实验使用 Qwen2.5-Math-7B、Qwen2.5-14B、Mathstral-7B 与 Mistral-7B-v0.3。
8. **评测。** 使用 GSM8K（1,319）、MATH5K（5,000）、CollegeMath（2,818）、去掉 critical-thinking 部分的 GSMPlus，以及 OlympiadBench（675），并单独报告 GSMPlus distraction subset。按 GSM8K/MATH 最高平均分选 checkpoint。评测 temperature 为 0、最多 2,048 token，使用 Qwen2.5-Math answer extractor/matcher。

Random seed、总 synthesis GPU-hours/cost、retry 和 failure 行为、各 agent 原始生成 yield、全部 SWIFT optimizer defaults 以及完整可运行实现均为 unknown。附录 F 给出若干 prompt，但表 8 对许多继承 agent 只指向其原论文。复现必须固定每个上游 dataset/model revision、继承 prompt 与 parser、taxonomy version、随机种子、生成 endpoint、answer normalizer 和 checkpoint-selection protocol。
