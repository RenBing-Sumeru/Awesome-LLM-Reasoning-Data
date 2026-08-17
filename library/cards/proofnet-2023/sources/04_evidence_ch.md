论文报告数据集规模为 371 个例子，官方 GitHub README 指向 Hugging Face 数据集作为实验使用入口。GitHub 仓库带 MIT license。论文 Table 3 报告：Davinci-code-002 加 prompt retrieval 的 typecheck rate 为 45.2、statement autoformalization accuracy 为 16.1；in-context Code-davinci-002 的 typecheck rate 为 23.7、accuracy 为 13.4。

可信证据不只是总体分数。单样本层面的关键证据有两类：生成的 Lean 3 陈述能否 typecheck，以及专家是否判断它表达了自然语言题意。论文还指出 prompt retrieval 让 Code-davinci-002 的 accuracy 提高 2.7 个点、typecheck rate 提高 21.5 个点，同时 BLEU 下降，这正好说明 BLEU 不能当作形式化质量的主证据。

证据边界：typecheck 只说明 Lean 表达式良构，不说明它忠实表达了教材题意；专家语义判断成本高，公开数据集本身不能替代这一步。Lean 3 / mathlib 版本漂移和公开样本进入后续模型训练都是复用风险。
