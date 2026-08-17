论文和官网记录约 113K 个基于 Wikipedia 的问答样本，并报告了答案预测和 supporting-fact 识别上的 baseline 差距。逐样本证据不是自由文本解释，而是预测答案与 gold answer 的匹配，以及预测 supporting facts 与 gold supporting facts 在官方脚本下的匹配。

总体 leaderboard 分数受任务设置、检索语料、evaluator 版本和 prompt/scaffold 限制。只有 answer F1 高但 supporting-fact F1 低，不能证明模型具备证据锚定的多跳推理。
