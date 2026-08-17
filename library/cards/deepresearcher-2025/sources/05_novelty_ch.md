相较于固定语料上的搜索 RL，DeepResearcher 把真实搜索与多 agent 网页阅读子系统放入训练环境。网络失败、噪声页面、URL 选择、重试和缓存状态都成为 policy 经历的环境转移；loss masking 还明确了环境 token 与 policy token 的边界。

GRPO、F1 奖励和多 agent 阅读本身已有先例。方向信号在于把它们整合进可扩展的真实网络 on-policy 训练，并披露 prompt 过滤与 rollout 分配。该工作提供训练/环境配方和 episode 模式，而非独立发布的轨迹语料。

