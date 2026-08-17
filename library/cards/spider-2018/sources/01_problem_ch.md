Spider 问的是：semantic parser 能否把自然语言问题泛化到未见过的数据库 schema，并生成正确 SQL。主来源是 EMNLP 2018 论文和 arXiv 记录 https://arxiv.org/abs/1809.08887，Yale LILY 项目页和官方 GitHub 仓库提供数据与 evaluator。

收录边界是 cross-domain text-to-SQL benchmark evaluation。一个样本包含自然语言问题、数据库 schema、数据库内容、gold SQL、split/domain metadata，以及官方 SQL matcher 或 execution metric 下的评分。它不是 agent 环境，不是固定 schema 的数据库 QA 语料，也不是训练配方。它的重要性在于把 schema generalization 和复杂 SQL structure 变成核心评测面。
