一手来源：https://aclanthology.org/D16-1264/。公开状态是 EMNLP 2016 / ACL Anthology，年份为 2016。它要解决的问题，是为机器阅读理解提供大规模、可自动评分的抽取式问答评测面。

评测对象包括文章、段落、问题、标准答案 span、模型预测 span、精确匹配和 token 级 F1。反馈契约是对预测答案 span 做标准化后计算 exact match 和 token-level F1。它是答案 span 评测面，不是通用事实性、指令跟随或长上下文评测。
