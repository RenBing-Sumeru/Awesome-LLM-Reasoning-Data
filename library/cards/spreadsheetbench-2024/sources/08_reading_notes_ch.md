阅读时要分清三件事：instruction-level hard success 不等于部分 test-case success；被检查的 answer range 不等于整个 workbook 的语义正确；公开 spreadsheet benchmark 文件不自动等于可复用训练数据。

比较 leaderboard 数字前，先读数据构造和 evaluator 章节。最关键的下游标签是反馈契约：输出 spreadsheet 被接受，是因为在固定 runtime 下，evaluator 把指定区域和 gold workbook 做了比较。
