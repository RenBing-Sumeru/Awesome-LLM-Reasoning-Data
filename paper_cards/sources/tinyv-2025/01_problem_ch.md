TinyV 关注的是数学推理 RL 中一个很实际的问题：基于规则的 verifier 可能因为解析、格式、等价判断过于脆弱，把本来正确的答案判成错误。这类 false negative 会把可用 rollout 变成负奖励，从而干扰强化学习。

这个问题重要，是因为很多 RLVR 流程会把 verifier 当成近似真值。如果 verifier 漏判正确答案，模型学到的可能不是更好的数学推理，而是更迎合某个 verifier 的格式习惯。
