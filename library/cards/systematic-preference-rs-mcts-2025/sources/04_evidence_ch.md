[官方 NAACL 论文](https://aclanthology.org/2025.naacl-long.552.pdf) 是主要证据。第 11065–11066 页描述 prompt synthesis、语义去重、程序化分数与 RS pair eligibility;第 11066–11067 页定义 token-level MCTS selection、expansion、混合搜索 reward、backpropagation、只用 verifier 的最终配对,以及主要 RS/MCTS 预算;第 11073–11075 页给出 prompt 数量、MCTS self-evaluation 细节和 pair yield 分析。[ACL Anthology 记录](https://aclanthology.org/2025.naacl-long.552/) 核验 NAACL 2025 出版信息、作者、页码、DOI 和官方 BibTeX。

报告对比支持的是幅度有限、并非普遍成立的 MCTS 收益。以 training k=4、`(c=4,r=2)` 为例,表 3 给出的 RS 与 MCTS hard scores 分别为:IFEval 78.86 与 79.68,k=4 合成评测 38.56 与 39.22,k=5 评测 21.66 与 22.43,k=6 评测 14.71 与 15.75。其他行在个别评测上存在持平或 RS 胜出。因此,可辩护的结论是共享前缀 MCTS pairs 在多种配置下带来边际、相对一致且更稳定的收益,而不是 MCTS 支配 RS。

Pair contrast 和 prompt difficulty 是另外两项发现。更大的 chosen/rejected score margin 通常比绝对分数更重要;混合高、低对比 pairs 有时有益,但结果并不一致。在训练数据规模和 margin 固定时,中等难度的 k=4 或 k=5 prompts 通常优于 k=6。附录图 6 把 RS 的 N 改为 {4,8,16,32,64},结果在约 N=32 前提升,随后饱和或退化。

SFT/DPO 对比支持 rejected responses 在该受控设置中的效用。表 9 某个 RS k=4 混合配置的 IFEval hard score 为 SFT 74.77、DPO 78.70;表 10 对应 MCTS 值为 73.30 和 79.97。这些 benchmark 结果不能证明 verifier 衡量了语义回答质量、pairs 最优,或未发布数据可以复现。
