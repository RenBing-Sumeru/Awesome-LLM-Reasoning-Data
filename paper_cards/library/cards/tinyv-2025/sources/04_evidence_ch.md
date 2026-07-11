这篇论文的证据应该从 verifier 错误的角度看：它主张找回 false negative 能改善数学推理 RL。最关键的证据不只是最终 benchmark 分数，而是作者是否展示了 verifier disagreement、false negative 行为，以及这些修正是否真的带来训练收益。

如果 false-negative 估计、额外计算成本、judge prompt 或 verifier 校准细节不能从公开产物中复现，那么证据强度就需要打折。
