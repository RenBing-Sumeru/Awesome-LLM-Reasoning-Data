论文支持下列流程，而公开仓库只支持训练/评测尾部。

1. **候选汇集。** 从 NuminaMath-CoT、DeepScaleR（约 40K 个 unique problem）、2024 年以前的 AIME、MATH，以及来源未具体说明的中文小学、中学、高中、本科练习与试卷中汇集数千万问题。准确 snapshot、逐来源数量、item ID、transformation 和权利均为 unknown。
2. **粗难度筛选。** 让 Qwen2.5-Math-7B-Instruct 对每题最多尝试四次，排除在这些尝试中能解出的题。论文没有披露该阶段的解码设置、answer checker 或 survivor count。
3. **细难度筛选。** 用 DeepSeek-R1-Distill-Qwen-32B 为剩余问题各生成 32 次尝试，只保留成功 1–3 次的问题，得到 2,125 个问题的 LIMO-Pool（论文第 3.1.1 节）。
4. **Benchmark 去重。** 对全部 evaluation benchmark 运行 n-gram matching；作者报告没有 overlap。N-gram size、normalization、threshold、benchmark revision、candidate pair 和决策日志均未发布。
5. **候选推理生成。** 对每个保留问题，分别从 DeepSeek R1、DeepSeek-R1-Distill-Qwen-32B 和 QwQ-32B 采样多个 solution。逐 teacher 的准确 rollout 数、temperature、top-p、token cap、seed、retry 和 generation cost 均为 unknown。
6. **人工检查与 proxy 定义。** 全体作者检查过滤后的 solution，并总结四个理想特征：elaborated reasoning、self-verification、exploratory approach 与 adaptive granularity。没有发布 annotation protocol、agreement statistic 或 decision ledger。
7. **规则评分与最终筛选。** 用长度（30%）、归一化 validation-word frequency（20%）、tentative-expression frequency（25%）和 connective-phrase frequency（25%）给每个 solution 打分。为每题选最高分 solution，对 2,125 个 pair 排序，再保留 top 800。完整 keyword list、tokenizer、normalization code、tie handling、selection ledger、rejected candidate 和最终 solution-correctness gate 均不可得。
8. **发布对象。** 发布单一 800-row LIMO-v2 train split，字段为 `question`、`solution` 和 `answer`；逐条构造元数据没有被保留。
9. **训练。** 对 Qwen2.5-32B-Instruct 做 full-parameter SFT，使用 DeepSpeed ZeRO-3、FlashAttention-2、16,384 cutoff length、5e-6 learning rate、cosine decay、无 warmup、15 个 epoch，论文报告 global batch 64。公开 YAML 设置 per-device batch 1 和 gradient accumulation 1，但没有 world-size manifest。
10. **评测。** 使用 zero-shot CoT。较大 benchmark 使用单次 greedy sample；少于 50 题的 benchmark 使用四个 temperature-0.6 sample 和 unbiased pass@1。输出上限为 32,768 token。数值答案用规则评分，复杂格式使用 LLM evaluator；发布代码指定 Qwen2.5-32B-Instruct 为 judge。

官方仓库 commit `2284c6a0e6653aa8894bd12fdecc1212ba706c3a` 没有实现第 1–7 阶段。仓库中没有 candidate-pool ingestion、四次/32 次过滤、n-gram audit、teacher-generation pipeline、lexical scorer 或 correctness checker。因此，构造 recipe 只被描述，不能直接从 release 执行。

同一 commit 也不是最终 v2 training package。`train/data/limo.json` 含 817 条 legacy v1 数据。`train/examples/train_limo.yaml` 把 `dataset` 设为一个内容是 “the limo dataset” 的尖括号 placeholder，而 `train/data/dataset_info.json` 没有 LIMO registry entry。复现 v2 需要固定 800-row HF revision `ef8bf143f8cc56ca8634795835b55083a3ae3061`，显式注册它、替换 placeholder，并记录 world size、template、checkpoint selection 和准确 model/data revision。
