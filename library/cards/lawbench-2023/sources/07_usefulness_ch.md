LawBench 可作为法律 benchmark schema 的蓝本，尤其适合把知识记忆、文本理解和应用型法律推理分开。应保留字段包括 task name、cognitive level、jurisdiction/language、prompt template、source text、target answer、metric、parser 和 repository commit。

它也是 LegalBench 的对照案例：LawBench 强调中文法律和 OpenCompass 评测，LegalBench 强调协作构建的广义法律任务套件。两者合看可以区分领域 taxonomy 与语言/司法辖区覆盖。

对 atlas 而言，LawBench 最适合作为 answer-level evaluation surface，以及法律 benchmark 污染、prompt sensitivity 和 scoring-script dependency 的审计清单。
