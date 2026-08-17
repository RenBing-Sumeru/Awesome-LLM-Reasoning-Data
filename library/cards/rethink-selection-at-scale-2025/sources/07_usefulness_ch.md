对 dataset builder 而言，本文提醒不要把复杂 self-score 当作 record 的内在质量。可信 selection study 应比较多个 random subset，分开计算 selection compute 与 SFT compute，保留 diversity，报告 selector adaptation，并测试结论能否跨第二个 source pool、base model 与 subset scale。

K-means-plus-length 思路可重建为受控 baseline：使用固定 tokenizer 计算 token count，对完整 pool 聚类，按 cluster size 比例分配 integer quota，定义 rounding 与 tie-breaking，在每个 cluster 选择最长 row，再相对 random、length-only、cluster-center 与 quality-score control 固定 SFT token、optimizer step 和 evaluation setting。公开 KMeans script 不能不经修改就当作 paper selector。

可审计 release 应发布 upstream revision/row ID、selector variant、score/embedding/cluster、query/response/total token count、random seed、keep/reject decision、subset membership、train-file hash、SFT checkpoint 与 benchmark output。Accepted 和 rejected record 都重要；缺少任一侧，就无法检查 selector bias 与 failure case。

复用等级：**适合作为 reading/audit reference 与 independent reconstruction recipe；direct training reuse 和 faithful paper reproduction 在核验前均被阻塞**。作者过滤的 WildChat file 不是 paper-specific 10K/50K selected subset，且 license/privacy lineage 不完整。不得把任何公开 checkpoint 或 selected subset 归因于本文。
