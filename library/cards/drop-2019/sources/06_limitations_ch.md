正确性只是 answer-level：模型可能用错误推理得到正确答案而得分，语义等价答案也可能因为归一化或别名处理不足被扣分。DROP 不提供可执行程序、形式化推导或可检查的 reasoning trace。

ACL 页面和 arXiv v2 对规模与部分分数有版本差异。公开样本年代较早，对现代 LLM 很可能存在训练污染。数字和日期评分依赖 evaluator 实现；若要把 DROP 当作当前能力声明，还必须检查 hidden/test split 访问和 leaderboard 政策。
