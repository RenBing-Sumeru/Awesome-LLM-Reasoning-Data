一句话概括其贡献：投入很大的隐藏搜索预算，找到困难问题和看起来长、探索性强的推理链，再只用 top 800 三元组，通过 full SFT 从 Qwen2.5-32B-Instruct elicitation reasoning。

构造契约包含四个不同 feedback surface：

| 阶段 | 对象 | 反馈 / 筛选规则 | 无法证明什么 |
|---|---|---|---|
| 粗难度 | 候选问题 | 若 Qwen2.5-Math-7B-Instruct 在四次尝试内解出则排除 | 失败来自真实难度、解码方差还是 checker error |
| 细难度 | 剩余问题 | 若 DeepSeek-R1-Distill-Qwen-32B 在 32 次中只解出 1–3 次则保留 | 超出该模型/预算时的真实难度 |
| Benchmark audit | 问题 | 对 evaluation benchmark 做参数未披露的 n-gram matching | 语义重叠、pretraining contamination 或可复现决策 |
| Trace quality | 候选 solution | 加权词法分数：长度 30%；validation-word frequency 20%；tentative-expression frequency 25%；connective-phrase frequency 25%，按长度归一化 | 数学有效性、step faithfulness 或这些词的因果效用 |

过滤得到 2,125 个问题的 LIMO-Pool 后，DeepSeek R1、DeepSeek-R1-Distill-Qwen-32B 与 QwQ-32B 各自生成多个 candidate solution。作者检查过滤后的例子，总结 elaborated reasoning、self-verification、exploration 和 adaptive granularity 等特征。词法分数为每个问题选择最高分 solution，再对所有 pair 排序并保留 top 800。

因此，feedback contract 是 mixed，但披露不完整。Model solve count 定义相对问题难度，n-gram matching 提供词法污染检查，人工观察形成质量维度，deterministic proxy score 排序 trace。生成 solution 的准确 final-answer checker 未发布。被纳入表示“通过已披露漏斗并被 proxy 排到前列”，不表示“每一步推理都已验证”。

最接近的比较对象是保留大量数学样本的 SFT corpus，以及强调长推理 trace 的近期小型 curated set。LIMO 把重心改为 base-model prerequisite knowledge 与 demonstration quality 是否足够。它没有单独提出 full SFT、long-CoT distillation、solve-rate filtering 或 keyword scoring。

该方向信号也是审计警告：“800 examples”是最终进入 loss 的数据规模，不是总数据或 compute budget。Pipeline 从数千万问题开始，执行 4 次和 32 次 difficulty pass，并使用多个 32B-scale reasoning teacher；这些构造成本和被拒输出都没有发布。
