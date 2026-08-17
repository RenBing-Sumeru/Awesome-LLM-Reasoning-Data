可信证据来自公开 benchmark 和论文观察：当 agent 必须在多轮中满足有状态 policy 时，成功率会明显下降。行级证据不是一个答案字符串，而是完整 transcript 加最终数据库状态，并由 reward code 检查。

原始规模为 115 个 retail tasks 和 50 个 airline tasks，这让版本化非常重要。只有在 domain files、用户模拟器、prompt format、tool implementation 和 reward function 相同的情况下，模型分数才可比。后续仓库提示原始任务已过时，本身就是证据边界：tau-bench 仍是重要反馈契约设计，但论文时期分数不能和 tau2/tau3 后续修复任务混用。
