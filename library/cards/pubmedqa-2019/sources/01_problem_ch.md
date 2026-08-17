PubMedQA 研究的问题是：在不给模型看论文 conclusion 的情况下，模型能否根据 PubMed 结构化摘要回答论文标题里的生物医学研究问题。主论文发表于 EMNLP-IJCNLP 2019，ACL Anthology 记录 DOI 为 10.18653/v1/D19-1259；官方项目页和 GitHub 仓库提供发布入口、PQA-L 文件和 scorer。

它的评测面是一个以 PMID 为键的样本：问题、摘要上下文、来自 conclusion 的长答案，以及 yes/no/maybe 三分类标签。边界要说清楚：这不是开放域检索，也不是临床决策支持系统；证据文本已经给出，验收方式是把模型输出归一成三类后与 gold label 对比。

实际缺口在于，生物医学 yes/no 问题通常需要综合实验结果，而不是抽取一个短事实。PubMedQA 明确区分三种证据强度：1,000 条专家标注的 PQA-L、约 61.2k 条未标注的 PQA-U、约 211.3k 条人工规则生成的 PQA-A。复用时必须写清使用的 subset、split 和 scorer。
