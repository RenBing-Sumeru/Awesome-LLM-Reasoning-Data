五种 contract 各有不同 confound。WPQ 可能奖励模型识别自然措辞、未改动 label、proper noun、number 或 formatting artifact，而非 memorization。Token Completion Overlap 只有 10 条记录，依赖 prompt-sensitive suffix 与 GPT-4 match judgment，并在 score 四舍五入到两位小数后做独立重采样的 10,000 次 bootstrap，且没有固定 bootstrap seed。Min-K% 没有适用于无标签语料的 operational threshold，在 oracle 中还出现预期方向反转。

两种 order 方法都假设原始 dataset order 在训练中得到保留。pretraining shuffle 可能抹去信号，语义或类别相邻性也可能在没有 memorization 时提示正确后继。更严重的是，公开 Local Order 的 negative sampler 在插入 true successor 前没有把它从负样本中排除，因此 quiz 可能出现两次正确后继，违反 prompt 所声明的 exactly-one-correct-option contract。Canonical Order 使用 population standard deviation（`ddof=0`）计算 t statistic，却以 `n-1` 自由度的 Student-t distribution 求值；在仅 10 个 shard 时，这个非标准选择有实质影响。

oracle 确立的是已知新增暴露，不是总污染。LLaMA-2 base model 可能已经见过 benchmark material，而且没有 token-budget-matched nonbenchmark SFT control 来隔离微调引发的一般 calibration 或 distribution change。生成的 chain-of-thought 也改变了答案形式，因此实验只覆盖一种现实但特定的暴露机制。论文没有报告独立训练重复、quiz accuracy 的 confidence interval、对采样选择的 robustness 或 multiple-comparison correction。

仓库不能 turnkey 运行。`main.py` 搜索 `.json` 顺序文件，而公开记录以 `.txt` 结尾；Local Order 依赖缺失的 `full_datasets` 目录；Canonical Order 引用不存在的 `canonical` 目录和未设置的示例 finetuned model。Min-K 与 Canonical script 依赖 Together likelihood 行为，并要求用户自行提供 credential。oracle 生成/训练代码、checkpoint、输出、likelihood vector、permutation、perturbation、completion、parser failure 与 run log 都未发布。虽然 Python dependency 有 pin，但没有完整 platform/CUDA/container 环境。

复用权利尚未解决。COLING 论文采用 CC BY 4.0，但 GitHub 仓库没有 LICENSE、dataset card 或逐来源 rights ledger。15 个处理后 benchmark view 没有附 upstream revision 或逐行 provenance。被检查的 commit 是论文发表后的仓库状态，且没有正式 release tag，因此不能假定它就是论文实验 snapshot。

文本中还有一处模型名称矛盾：一个结果段落写 Claude 3 Haiku，而方法说明、Table 1、其 caption、Table 3 与公开 runner 都写 Claude 3 Sonnet。本 Card 因重复证据更强而采用 Sonnet，但各 pipeline 的精确 checkpoint 仍是 unknown。
