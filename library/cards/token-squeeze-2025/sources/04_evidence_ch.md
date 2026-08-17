证据属于实验与配方层面，不是逐行数据认证。在 MATH500 上，7B baseline 为准确率 92.8%、Len-T 3,638、Len-A 4,190、AUC 83.6；TokenSqueeze 为 92.4%、1,773（-51.3%）、2,045（-51.2%）、87.5。这支持“约 50% token 减少而准确率接近 baseline”，却不是对生成语料的独立验证（论文 Table 1）。

对 7B AIME24，Table 1 报告 baseline 55.5% / Len-T 7,543 / Len-A 13,337 / AUC 41.6，TokenSqueeze 为 57.5% / 5,157 / 9,189 / 48.5。LiveCodeBench 对应 31.3% / 3,961 / 20,690 / 27.5 与 35.0% / 3,200 / 15,635 / 31.6。数学评测用温度 .6、16 次独立运行、32,768-token 上限；LiveCodeBench 用温度 .2 和 2024-08-01--2025-01-31 窗口，同样取 16 次平均（论文 §4.1；附录 A.3）。

消融说明了有条件的机制。Q-DYN 在 AIME24 为 57.3 / 6,190 / 46.5，在 MATH500 为 92.8 / 2,180 / 86.7（accuracy/length/AUC）；shortest selection 对应 53.3 / 5,960 / 43.7 和 90.8 / 1,926 / 85.5。Table 3 比较 MATH500 No Refinement（92.8、2,180、86.7）与 TokenSqueeze（92.4、1,773、87.5）；Table 4 中纯 DPO 的 AIME24 准确率为 48.3，完整目标为 57.5。这些是作者报告、依赖设置的效果，不证明 KL gate 验证了每一步（Tables 2-4）。

仓库确认了步骤顺序、输入名、生成默认值、quantile=.2、KL threshold=.005 与作者关联的 7B/1.5B 模型。它没有提供与论文匹配的 response/rewrite/pair 文件、哈希、保留台账、model card 或数据质量审计；已检查的一手材料中未发现独立复现。
