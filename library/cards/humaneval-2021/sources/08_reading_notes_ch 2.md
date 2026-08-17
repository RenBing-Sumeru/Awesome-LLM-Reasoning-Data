# 阅读笔记：应该记住什么？

- 先记住规模：164 道手写 Python 函数补全题。
- 再记住评测单元：一条样本包含函数签名、docstring prompt、参考实现和隐藏/公开测试。
- 最关键的反馈契约：执行生成代码并跑单元测试，常用 pass@k 汇总。
- 读相关论文时要问：它使用的是哪个 split？是否更改 prompt 或 scorer？是否可能训练污染？是否把 evaluation-only 数据当成训练信号？
- 对这张卡的人工 review，建议优先核对官方数据量、license 和当前 leaderboard/代码链接。
