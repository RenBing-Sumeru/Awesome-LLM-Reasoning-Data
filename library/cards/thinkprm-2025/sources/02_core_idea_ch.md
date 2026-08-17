ThinkPRM把过程验证器从“前缀到标量”的分类器改为可语言化的judge。给定数学题和解答前缀，模型生成长verification CoT，按顺序批评各步骤，为每个已检查步骤输出boxed `correct`或`incorrect`判断，最后给出整体解答正确性决策。最终决策概率成为prefix score；rationale是可观察的验证轨迹，而不是证明。

监督配方采用rejection sampling，而不是gold rationale。QwQ-32B-Preview对每个PRM800K-train前缀采样4条验证链。只有当所有所需boxed判断均可解析、每个生成判断都与相应PRM800K人工步骤标签一致、链不超过4,096 token，且最终1K集合在前缀正确性上大致平衡时，样本才被保留。人工标签约束决策边界，但人工并未验证生成批评文字是否正确或忠实。

之后可用两种方式扩展验证器计算。Parallel scaling采样K条独立verification CoT并平均prefix score。Sequential scaling通过`Let me double check`、`Let's verify again`和`Did I miss something?`等不同提示延长同一验证，让模型修订先前判断。Best-of-N使用验证器加权的答案投票，guided beam search则在扩展前为候选部分解答评分。

反馈契约需要模型判断，并受具体模型约束。高分表示训练后的生成式验证器在执行自身验证过程后，对“正确”赋予较高概率；它不是程序化正确性检查、环境reward或模型无关标签。重复思考可能暴露替代检查，但相关错误、过早承诺和step-label interference仍可能存在。
