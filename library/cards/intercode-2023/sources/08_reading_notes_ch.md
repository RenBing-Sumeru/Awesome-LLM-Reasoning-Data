阅读 InterCode 时最好沿着一条 episode 从头看到尾。关键区别不是“代码任务还是非代码任务”，而是 final-answer scoring 与 state-action-observation evaluation。

要分开中间反馈、最终 reward 和事后解释。模型靠大量不安全或脆弱命令达到 terminal predicate，不应和干净 trace 混为同类，除非 benchmark 显式记录这种差异。
