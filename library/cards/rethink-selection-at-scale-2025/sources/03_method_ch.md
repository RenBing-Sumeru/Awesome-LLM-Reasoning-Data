输入是 OpenHermes2.5——论文描述为来自十六个来源、超过一百万条 record——以及从 WildChat-1M 提取的 440K+ English dialogue（Paper §4.1）。论文未固定 immutable source revision，也没有发布 input-ID manifest。OpenHermes 混合 synthetic/general instruction、math 与 code record；WildChat 包含 real-user prompt 与 GPT-3.5/4 response。论文保留现有 assistant text，而不重新生成答案。

六条 selection path 如下：

1. LESS 计算相对 validation example 的 Adam/LoRA gradient similarity。Appendix A.1 将原设置改为每个 pool 随机 1,000 条 validation 与 10,000 条 warm-up set。
2. IFD 使用“conditioned on instruction 的 answer loss”与 direct-answer loss 之比；scaled version 把 instruction embedding 聚成 1,000 个 cluster。
3. SelectIT 从 rating-token probability 推导 uncertainty，再跨 prompt、可选地跨 model 聚合。Qwen scoring 使用 Qwen2-1.5B 与 Qwen2-7B，Llama branch 因成本只使用 Llama3-8B sentence-level score。
4. Cross-entropy 选择 base model response loss 更大的答案。论文后来指出，该信号偏好长 response，且可能把它与简单 instruction 配对。
5. DiverseEvol 在 embedding space 中做 K-center selection。为避免超过 1 TB 的 matrix，implementation 每轮一次选出所有所需 point，而不是逐点选择；作者承认该 adaptation 可能降低 performance。
6. ZIP 按 compression ratio 与 redundancy 进行 greedy selection。

五个 independent random subset 是 control。Tables 2–3 中每种方法选择 10K records，Tables 6–7 中选择 50K。Qwen2-7B 与 Llama3-8B 训练 3 epochs，global batch 128、context length 4096、learning rate `7e-6`、cosine schedule、weight decay 0.1、warm-up ratio 0.01（Paper §4.3）。Evaluation 通过 Open-Instruct 使用 BBH 3-shot、GSM8K 8-shot、HumanEval pass@1、MMLU 5-shot 与 IFEval strict/loose（Paper §4.2）。未发布 paper-level evaluation launcher 或 immutable Open-Instruct revision。

在 proposed length path 中，tokenization 记录 query、response 和 total count。论文随后对 representation 聚类，保持 cluster proportion，并在每个 cluster 内选择更长 record（Paper §5.4，Table 4）。公开 `compute_token_num.py` 实现 token counting，`embedding.py` 与 `kmeans_sample.py` 提供 embedding/KMeans utility；但 KMeans script 硬编码切片 `embeddings[:100]`，使用 `random_state=0`，并输出最接近 cluster center 的 record。它既没有处理 full pool，也没有实现论文的 longest-within-cluster selection。

复现必须固定两个 source-pool revision、所有 selected/random IDs、每个 selector adaptation 与 seed、tokenizer/base-model revision、cluster count 与 quota rounding、LLaMA-Factory 0.8.2.dev0 commit、Open-Instruct 与 benchmark revision、SFT configuration、checkpoint 和 evaluation output。仓库没有 tag、release 或 root license，包含 private path/placeholder，也没有 tests 或 paper-run manifest。
