不要把 SimpleQA 读成 hallucination 的通用解法。它只测一个受限切片：短、单答案、答案尽量稳定的事实问题。

建议阅读顺序：dataset criteria and verification、grading/metrics、model table、calibration experiments，最后看 appendix 里的 grader prompt。最关键的区别是 incorrect versus not attempted；把两者合并会损失主要信号。

比较系统时，要把 row-level labels 和 aggregate metrics 分开，也要把 F-score 与“错误答案相对于不作答该重罚多少”的 policy choice 分开。
