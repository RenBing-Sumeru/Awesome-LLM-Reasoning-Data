要把三类 claim 分开：代码是否可执行、渲染图是否相似、图表语义是否正确。ChartMimic 用 mixed automatic pipeline 同时测这些方面，但不能把它们压缩成一个未经限定的“理解图表”结论。

读模型 leaderboard 前先看任务变体和 metric 定义。分数变化可能来自视觉保真度、代码失败、渲染依赖或指令遵循差异。
