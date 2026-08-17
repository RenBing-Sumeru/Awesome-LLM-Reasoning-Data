核心构造是一条逐步收窄的质量漏斗。Broad multilingual pretraining 提供语言覆盖；MT continued pretraining 使用 language ID、deduplication、perplexity、QE、RegMix-style mixture search 与 original-data replay；约 3M 条 stage-one pair 经过 judge filter，再由 many-shot vetting 与针对重复评分不一致样本的 human review 筛出约 268K 条高保真数据。

Translation GRPO 没有确定性 correctness check，而采用复合 learned reward：XCOMET-XXL、DeepSeek-V3-0324 的 GEMBA-adapted 评分、基于 word alignment 的 terminology overlap 与 repetition penalty。随后 Chimera 在多个 Hunyuan-MT candidate 上训练 weak-to-strong fusion policy，奖励由 XCOMET、DeepSeek scoring 与 repetition feedback 构成。

公开 test-time interface 明确包含 6 个编号 candidate translation，并要求输出一个 refined answer。这是具体的 slow-thinking data object，但六组 generation setting、candidate-selection policy、rollout 数量、GRPO budget 与端到端 inference cost 均未披露。

独立 CoT 实验称 final-answer-only reward 会产生模板化推理，而同时奖励 reasoning 与 translation 可改善 trace 和输出。由于缺少数值表、reward 定义、训练集和 released-checkpoint linkage，这只能支持定性 process-supervision 结论。
