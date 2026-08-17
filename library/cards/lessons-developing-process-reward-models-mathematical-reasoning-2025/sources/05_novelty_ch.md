本图谱关注的贡献不只是又一个公开的 reward model。论文将过程标签约定披露到足以区分两种不同量：对当前步骤的确定性判断，以及 continuation 以后是否可能到达正确答案的 MC estimate。它还公开了其 consensus filter 所使用的 disagreement relation。

报告也将 evaluation design 视作披露边界的一部分。通过说明 Best-of-N 如何以答案正确性奖励而非过程验证，它指出了一个具体审计风险：不能把 response-level score 当作 PRM 是可靠 verifier 的唯一证据。
