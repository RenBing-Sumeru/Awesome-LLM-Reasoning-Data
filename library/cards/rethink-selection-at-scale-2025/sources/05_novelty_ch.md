既有 SFT selection 工作常在较小、同质性更高的 pool 上报告 quality 或 diversity gain。本文真正的变化不是新 score，而是在两个更大、heterogeneous pool 上重实现六种已有 self-scoring selector，报告五次 random run，记录昂贵或不可行的分支，并在收益无法随规模保留时公开 negative result。

各组件本身都是已有技术：gradient influence、instruction-following difficulty、rating-token uncertainty、cross-entropy、K-center diversity、compression、K-means 与 token length。多个方法为了 feasibility 被实质修改，尤其是 batched DiverseEvol。因此，论文测量的是“scaled implementation 与 resource budget 下的方法”，不是把原算法原封不动搬到更大 pool。

方向层面的贡献有两点。第一，diversity 与 implementation cost 成为 selection contract 的组成部分，而不是附带考虑。第二，论文给出廉价 K-means-plus-length recipe，并在报告设置中对 Llama3-8B 表现较强。它使 negative scaling evidence 对 builder 可操作——前提是 terminal selection rule 真正发布。

最重要的 novelty boundary 是 public-code mismatch。统计 token 并寻找 cluster center，不等同于按 cluster size 分配 quota、再选择每个 cluster 的最长 record。复用前必须实现并测试 paper rule，披露 cluster allocation 与 tie-breaking，并发布 selected/rejected IDs；否则复现的是 repository utility，不是 Table 4。
