最强的 difficulty evidence 是对 100 道入选题目的专家评分模型评测。每个模型每题生成 3 个 response；专家对完全正确 derivation 记 1 分，并按完成的关键步骤给比例 partial credit。Figure 3 报告 solved-problem rate：GPT-4o (20240806) 为 0.0%，GPT-o1-Mini 2.7%，GPT-o1-Preview 3.6%，GPT-o1 3.0%，GPT-o1-Pro 4.6%，DeepSeek-R1 3.3%。这些结果说明该专家筛选集合对被测 snapshot 很难。由于 selection 明确以困难样例为目标，它们不是对一般数学能力的无偏估计。

Table 1 提供的是有正有负的 downstream SFT evidence，并非一致提升。LLaMA3-8B 在 GSM8K zero-shot 上从 15.39 变为 42.91，在 MATH zero-shot 上从 0.12 变为 7.96；但 GSM8K 8-shot 从 50.27 降到 45.49，MATH 4-shot 从 17.08 降到 13.82。Qwen2.5-7B 在四个 setting 上从 80.67/83.32/67.82/54.42 变为 81.96/83.70/67.96/63.54。标题中的 7.84 与 9.12 是特定 MATH setting 的 absolute gain，而非 aggregate accuracy improvement。

Table 2 报告 Qwen2.5-7B 在 AIME 2024 上从 0.00% 增至 3.33%，AIME 2025 从 3.33% 增至 6.67%；Qwen2.5-32B 在两套数据上从 20.00% 增至 23.33%，以及保持 15.00% 不变。这些 evaluation set 很小，论文未报告 uncertainty，也没有审计 paper/source overlap。

Formula derivation 实验对 Qwen2.5-7B 做 fine-tuning，并在从 NuminaMath-1.5 抽取的 test set 上评估。DeepSeek-R1 把模型回答与 ground-truth proof 比较，对 correctness、completeness、similarity 各给 0–2 分。平均值从 0.91 增至 1.07（论文称相对提升 17.58%）；三个分项均值从 1.10/1.14/0.50 变为 1.23/1.32/0.66。由于这是单一 LLM judge，而且论文自身观察到 LLM 会高估错误推导，该证据弱于专家 benchmark evidence。

Quality ablation 用 top-100、top-500、2K 与另一个标作 fullset 的集合训练 LLaMA2-7B。Top-100 在所列 GSM8K zero-shot/8-shot 上最高，为 8.80/16.98；top-500 为 8.11/15.09，2K 为 6.70/14.87。Fullset 为 5.16/14.10，低于 base 的 7.96/14.33。这支持该模型与 setup 下的 selection 论点，但无法区分 expert revision、difficulty selection 与 source mixture 的影响；当前 repository 也没有发布任何较大 ablation dataset。

Artifact 检查确认 100 道 unique question、28 个 source identifier、精确 73/27 question partition，以及 100-row 和 27-row choice variant；同时发现论文未披露的 source/filter 与 split 事实：两个 2025 arXiv ID、三本书，以及 test 的 18 个来源中有 17 个也在 train。Benchmark performance 不能作为 decontamination、license compatibility 或逐记录正确性的证据。
