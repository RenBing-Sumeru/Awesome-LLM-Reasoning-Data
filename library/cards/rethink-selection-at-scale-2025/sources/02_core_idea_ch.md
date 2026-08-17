核心贡献是一项 scale stress test：在两个大型 heterogeneous instruction pool 上比较六种 self-scoring selector 与五次 random control，再检验廉价的 diversity-aware token-length rule 是否比复杂 score 更实用。四种 quality selector 是 LESS、IFD、SelectIT 与 response cross-entropy；两种 diversity selector 是 DiverseEvol 与 ZIP。Main experiments 选择 10K records，Appendix A.2 在 50K 上重复。

Feedback contract 是间接的。LESS 观察 gradient similarity，IFD 比较 conditioned 与 direct answer loss，SelectIT 观察 rating-token uncertainty，cross-entropy 观察 response surprise，DiverseEvol 观察 embedding distance，ZIP 观察 compression redundancy。这些信号都不检查 source answer 是否正确、安全、许可清晰或未受污染。最终 utility signal 是 SFT 后在 BBH、GSM8K、HumanEval、MMLU 与 IFEval 上的 model performance，因此 selector 在 aggregate run level 上被判断，而不是通过 record-level correctness 被验证。

论文的 practical alternative 先对 source pool 聚类，按 cluster size 比例分配 selection quota，再在每个 cluster 内保留更长的 record；它把 diversity preservation 与廉价 length proxy 结合起来。公开 utility 没有实现该 terminal rule：`token_length/kmeans_sample.py` 截断到前 100 个 embedding，并返回最接近 cluster center 的点，而不是按比例选择 cluster 内最长 record。

Atlas 中最接近的对照是 `more-data-or-better-data-2025`：后者固定数学数据的 80/20 baseline/candidate mixture，研究 source、teacher 与 format 变化；本文则在一般 instruction pool 上固定 selected subset size，比较 self-scoring 与 random selection。两者都表明 downstream benchmark delta 不是 record-level verifier，negative claim 需要 selected IDs、run binding 与 contamination evidence。
