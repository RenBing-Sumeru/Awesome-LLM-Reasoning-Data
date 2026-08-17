输入是一条记录所需的任务材料和元数据：NLG 任务输入、候选输出、评价准则、CoT 表单 judge response、分数 token 分布和 GPT-4 标量分数。

流程：构造 rubric prompt；让 GPT-4 推理并填写评分表；抽取分数；与人类评分比较；对 prompt 设计和 metric baseline 做消融。

输出是在该契约下评分的 benchmark record 或 evaluation summary：LLM judge 的标量分数，并用与人类评分的相关性做外部检验。复用必须固定来源版本、split、scorer 或 judge 版本、prompt/scaffold policy、相关运行环境和 artifact license。
