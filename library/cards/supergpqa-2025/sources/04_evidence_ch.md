主要规模证据很明确：论文报告 26,529 题，覆盖 13 个 discipline、72 个 field、285 个 subfield。论文表格和官方 README 还给出各 discipline 题量，Science 和 Engineering 占比最大，但非 STEM 领域也被纳入。

主要难度证据来自模型表现。论文和 README 初始结果表中，DeepSeek-R1 的 overall sample accuracy 最高，为 61.82；subfield 平均 62.61，field 平均 61.23，discipline 平均 59.95。DeepSeek-R1 在 easy/middle/hard split 上分别为 63.59、63.63、56.87，说明即便最强列示 reasoning model 仍有大量错误。

逐实例证据是模型输出经 parser 解析后与答案键匹配，而不是评测时再由开放式专家裁判。证据边界很重要：结果会受 prompt wording、zero-shot 或 five-shot 模式、答案 parser、模型快照，以及公开题目或 response records 是否进入后续训练数据影响。
