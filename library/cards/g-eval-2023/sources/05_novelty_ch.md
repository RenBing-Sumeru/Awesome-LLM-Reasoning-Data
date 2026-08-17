已有工作主要包括BLEU/ROUGE 式指标、learned NLG metric 和更简单的 prompt-only LLM judge。

新的对象是评分契约本身：rubric 文本、judge 模型、CoT 字段和标量分数都变成可审计元数据。

不新之处：人类评分 NLG 和 rubric scoring 本身不新；复用要检查 judge 模型版本、prompt 泄漏、分数归一化和目标任务偏移。
