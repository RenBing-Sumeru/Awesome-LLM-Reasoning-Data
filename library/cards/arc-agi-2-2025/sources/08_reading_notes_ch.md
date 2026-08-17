不要把 ARC-AGI-2 分数直接读成 general intelligence score。它表示在一组人工策划的少样例 grid-transformation tasks 上 exact success。

必须分开三类量：public evaluation accuracy、private-tier competition performance 和 human baseline。它们的泄漏风险和反馈条件不同。

读 solver 论文时，要看 attempt count、search budget、开发时是否使用 public evaluation tasks，以及结果是在 public、semi-private 还是 fully-private set 上报告。
