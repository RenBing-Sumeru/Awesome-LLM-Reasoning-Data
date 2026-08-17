LegalBench 的问题是：如何跨多种任务类型衡量英文大语言模型的法律推理能力，而不是只用一个律师考试或法律 QA 分数。主要来源是 arXiv:2308.11462、Hazy Research 项目页、官方 GitHub 仓库和 Hugging Face 数据卡。

评测面是一个 open-science 法律任务集合。单条样本可能包含法律文本、prompt、label、class set、抽取目标或生成目标，具体取决于任务是 binary classification、multi-class classification、extraction、generation 还是 entailment。

收录边界是 legal reasoning benchmark construction。它不是法律咨询产品，不是法律时效性数据库，也不是单一统一 metric。复用必须分开保存 task identity、source lineage、license、split、prompt、label space 和 evaluator。
