已有基线：GSM8K、MathQA 等 math word-problem datasets 主要使用纯文本题面；table QA datasets 往往关注 lookup、semantic parsing 或特定领域表格。TabMWP 把两类要求合在一起：table 是必要输入，answer 还需要 mathematical reasoning。

变化点：benchmark 为每个 question 配套 table representations、answer labels 和 natural-language solutions；PromptPG 则把 in-context example selection 视为可学习 policy，而不是 random selection、fixed manual examples 或 nearest-neighbor retrieval。方向信号是一个明确的 semi-structured reasoning benchmark 坐标，其中输入对象不只是 prompt，而是 table plus question plus answer contract。

质量信号：论文报告 construction filters、split sizes、answer-type distributions、blind ablations、baseline comparisons，并有官方 repository 在 `data/tabmwp` 发布数据文件。并非新东西：terminal verifier 仍是 answer-level accuracy，不是 proof 或 executable program checker；gold solutions 是解释性 traces，不是独立验证的 process-supervision labels。复用检查应关注 scorer behavior、answer extraction、table-format choice 和 license constraints。
