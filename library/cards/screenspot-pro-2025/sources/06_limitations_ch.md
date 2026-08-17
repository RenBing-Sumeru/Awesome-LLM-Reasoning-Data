正确性是 localization correctness，不是任务完成。模型能在截图中点对元素，并不说明它能规划工作流、操作应用、从状态变化中恢复，或理解专业领域语义。

分数依赖 screenshot resolution、coordinate normalization、target-box annotation、output parsing、模型视觉 pipeline，以及是否允许多轮搜索。专业软件截图可能有许可限制。公开 benchmark 图像可能被记忆；中文 instruction 结果也应和英文分开报告，因为语言切换改变了任务。
