SETS 包含三个 prompt operation：Sampling、Self-Verify 与 Self-Correct。系统先采样 m 个独立 solution；每条分支分别 self-verify。若 verification 被解析为正确，该分支停止；否则模型接收 query 及该分支此前全部“solution—feedback”对并提出 revision。循环最多执行 n 轮 correction；若到上限后仍被自验为错误，也保留最后一次 revision。

论文的 judgement function 对 verification 文本使用规则解析：若 response 含指定的“solution is incorrect”表述，分支继续，否则视为正确。所有分支结束后，exact matching 对结构化最终答案分组，频次最高者获胜，平局随机打破。SETS 在无需外部 reward model 的情况下结合 repeated sampling 与类似 SELF-REFINE 的修订。新意在于对分支数和修正深度进行二维预算分配，而非单独发明 sampling、self-verification、self-correction 或 majority voting。
