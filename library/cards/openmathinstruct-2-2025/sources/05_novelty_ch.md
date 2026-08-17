既有基线是：从现有数学 benchmark question 出发，用 teacher 生成 worked solution，再做开放 mathematical instruction tuning。Solution augmentation、synthetic question generation、final-answer filtering、SFT 和 model-judge check 都早于本论文。它的贡献不是新 optimizer 或 verifier。

具体变化来自数据对象的组合方式与规模：

- **两个 augmentation 轴：** 为原始 GSM8K/MATH 问题生成许多替代 solution，同时生成许多新题并为每个新题采样 32 个 solution。
- **强 405B teacher：** Llama-3.1-405B-Instruct 同时生成新问题和 worked solution，并与 8B on-policy data 做 matched-coverage 对比。
- **把 question diversity 作为受控变量：** 论文区分 unique-question count 与 total pair count，并在固定 256K pair 时测得超过十分的 MATH-validation 影响。
- **为无标签合成题构造答案：** 32 个抽取答案的表面形式 mode 成为 proxy `expected_answer`，minimum vote threshold 为 0。
- **规模与打包：** 准确含 13,972,791 行的 train 数据，加上重叠的 fair 1M/2M/5M subset、公开模型和可执行 Skills 文档。

因此，新意是把 representation、teacher strength、filtering、unique-question coverage 和总 SFT scale 作为交互杠杆的大规模开放 recipe study。Format 消融表明，更短的 OpenMath CoT target 可超过更冗长的 Llama CoT target；teacher 消融表明，强 off-policy teacher 可超过弱 on-policy data；diversity 实验则表明，即使 pair count 固定，更多 unique task 仍然重要。

同样需要说明哪些部分不新。公开记录仍是常规 prompt/solution/answer/source tuple，student 使用 full SFT 优化。Majority aggregation 提供 answer proxy，但不是 process supervision。去污染阶段组合已有 embedding retrieval 与 LLM paraphrase judge，并不能保证数据无污染。

对 reasoning-data 研究而言，其方向信号是把“data scale”拆分为 unique prompt、每题 solution 数量、teacher capacity 和 selection contract。论文四舍五入的 607.3K unique-question total 与准确的 13,972,791 pair count，正说明这些轴不能混为一谈。

复用前，研究者必须检查 historical build 与当前 recipe 是否一致，恢复 candidate/vote/rejection lineage，测试超越字符串形式的答案等价性，对全部 benchmark overlap check 做版本固定，并核实 CC BY 4.0 dataset 条款、Apache-2.0 code 条款、上游来源权利和 teacher-model 条款如何适用于预期分发。
