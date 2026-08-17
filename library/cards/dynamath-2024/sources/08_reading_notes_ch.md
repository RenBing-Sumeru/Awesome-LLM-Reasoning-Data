不要把 average-case accuracy 和 worst-case accuracy 合并理解。核心判断是：模型均值看似不错，但可能在同一 seed 的某些变体上稳定失败。

读 leaderboard 前先读生成细节。benchmark 的可审计性取决于一个 concrete question 能否追溯到 seed program、parameters、random seed、rendered image、generated answer 和 parser outcome。
