G-Eval 用 GPT-4 的 CoT 表单评分器评测 NLG 输出，并把 LLM-as-a-judge 当作可审计评分面。 主来源是EMNLP 2023 main 的 ACL Anthology 记录、arXiv 2303.16634 和 nlpyang/geval 仓库。

它回答的具体问题是：开放式 NLG 输出能否用 rubric-conditioned GPT-4 judge 评分，并且比传统自动指标更贴近人类评分。决策边界是LLM judge 与评测面，不是新的 NLG 数据集、可执行 verifier 或 reward-model 训练发布。

数据对象或评测面是NLG 任务输入、候选输出、评价准则、CoT 表单 judge response、分数 token 分布和 GPT-4 标量分数。它对 atlas 的价值在于把反馈契约说清楚：LLM judge 的标量分数，并用与人类评分的相关性做外部检验。
