核心贡献是一条分阶段数学数据工厂：抽取并标准化 AoPS 题目，用多个 teacher 生成大量 long CoT 与 Python-TIR candidate，依据 answer-level 和 mode-specific 检查保留样本，构造候选 solution-selection trace，再用所得 mixture 训练 Qwen2.5 base model。

| 契约要素 | 公开或文档化对象 |
|---|---|
| Prompt source | 主要是排除 Middle School Math 的 AoPS discussion；公开记录还标出少量 `MATH_training_set` 来源 |
| CoT behavior | DeepSeek-R1 或 QwQ-32B 为每题写最多 32 个长解答 |
| TIR behavior | LIMO-Qwen-32B、微调后的 QwQ-32B 和 intermediate 14B generator 分阶段生成 reasoning、Python call 与 output 交错的 trace |
| GenSelect behavior | QwQ-32B 比较由 2–16 个 candidate summary 组成的 group，每组至少有一个正确和一个错误答案 |
| Answer target | 有论坛答案时使用 extracted answer；converted proof 或 no-answer problem 使用 majority-induced answer |
| CoT feedback | Qwen2.5-32B-Instruct 判断 final-answer equivalence |
| TIR feedback | 最终答案正确性，加 code presence/execution-count constraint；只有 stage-0 另用 novelty/significance judgment |
| GenSelect feedback | 只有选中 answer-correct candidate 的 comparison trace 才保留 |
| Public object | 共享九字段 schema 中的 CoT、TIR、GenSelect 或 problem-only 文本 |

verification contract 是 mixed，但主要属于 answer-level。Qwen2.5-32B-Instruct 可以比较答案形式、分类题目、判断 novelty/significance 并总结 trace；programmatic check 可以观察是否出现代码以及 generation 是否遵守指定 execution-count limit。二者都不能独立核验每个数学步骤、proof validity、code-to-prose agreement 或 tool state。对于 converted proof 和未抽取到答案的问题，teacher majority 成为 target，因此共识可能传播共同错误。

最近的概念 baseline 是传统 teacher-distillation pipeline：生成 CoT，再按最终答案拒绝 candidate。OpenMathReasoning 把它扩展成多 mode、迭代式工厂：先用严格过滤的 15K TIR seed 训练更强 TIR generator，后续阶段关闭已被证明损害下游性能的 filter，GenSelect 再把候选 solution group 转化为选择监督。新意在于集成式构造与开放发布，而不是新的 step-level verifier，也不是宣称可执行代码证明了相邻 prose。

该发布还具体说明了一个审计原则：aggregate “problem count”取决于统计位置。论文的 540K 是 processing-stage count；306K 是官方有公开 solution 的唯一题目数；另有 193,170 行只有题目、没有 generated solution。
