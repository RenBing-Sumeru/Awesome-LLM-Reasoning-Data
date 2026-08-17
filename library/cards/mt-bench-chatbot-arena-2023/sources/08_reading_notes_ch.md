阅读时要分开三件事。第一，MT-Bench 是固定公开问题集；Chatbot Arena 是 live 或 snapshot-based preference platform。第二，GPT-4 judge 是被评估的机制，不是无需质疑的真值。第三，aggregate agreement 或 win rate 不是逐条 verifier result。

建议阅读顺序是：问题与 benchmark 构造，judge bias 分析，agreement tables，最后看 appendix 中的 agreement calculation 和 bias prompt 细节。下游使用时要把 human-human agreement、judge-human agreement、non-tie agreement、tie/inconsistent handling 和 leaderboard score 分成不同 claim。
