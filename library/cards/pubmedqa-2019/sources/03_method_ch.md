输入来自 PubMed 论文元数据和结构化摘要。PQA-L 与 PQA-U 中，问题是以问句形式出现的 PubMed 标题；上下文是去掉 conclusion 的结构化摘要；长答案来自 conclusion。PQA-A 则从陈述式标题出发，把标题转换成问题。

构造流程可以拆成六步：

1. 收集标题和结构化摘要可用的 PubMed 记录；
2. 从模型输入中移除 conclusion，同时保留它作为长答案依据；
3. PQA-L 由两名 M.D. candidate 在不同证据条件下给 yes/no/maybe 标签，标签一致则保留，不一致则讨论；
4. PQA-U 保留可回答的问句标题文章，但不提供专家标签；
5. PQA-A 用规则化标题转换和否定启发式生成问题与标签；
6. 预测结果按 PMID 到标签的 JSON 格式交给官方 scorer 评测。

最终 artifact 不是推理轨迹，而是包含 question、context、long answer、可用 gold label 以及 subset/split 元数据的数据记录。可复现性取决于是否固定 PQA-L/PQA-U/PQA-A、官方脚本生成的 split 或本地 split、标签归一化规则、PubMed 源文本使用条款，以及 PQA-A/PQA-U 是训练资源还是被误用为评测资源。
