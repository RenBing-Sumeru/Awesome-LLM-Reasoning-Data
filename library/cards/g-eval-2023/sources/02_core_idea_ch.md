一句话贡献是：把任务评价准则写进 judge prompt 与评分字段的结构化 LLM evaluator。

核心机制是任务特定 rubric、CoT prompting、分数抽取，以及对人类评分的相关性分析。被评分对象是NLG 任务输入、候选输出、评价准则、CoT 表单 judge response、分数 token 分布和 GPT-4 标量分数，反馈契约是LLM judge 的标量分数，并用与人类评分的相关性做外部检验。

最近对比对象是BLEU/ROUGE 式指标、learned NLG metric 和更简单的 prompt-only LLM judge。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
