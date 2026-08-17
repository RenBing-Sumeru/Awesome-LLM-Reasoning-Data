Online-Mind2Web 在官方 leaderboard 上报告 69.0%，在 Browserbase harness 中为 65.7%。WebVoyager 在官方/自报设置中为 88.9%，在 Browserbase 中为 79.9%。已披露的 Online-Mind2Web 与匹配 WebVoyager 流程使用 temperature 1、`include_thoughts=True`、autoregressive pass@1、每任务一条 trajectory，以及三名独立人类对整轨进行多数票判断。这些数值评估的是 policy-environment-judge 配置，不是训练数据、reward、verifier 或 rollout budget 的证据。

WebVoyager 不是原始固定的 643-task 集合：日期被修改，不可行任务被移除，剩余 559 个任务。附录警告不同 provider 可能使用不同可行子集与访问日期。Browserbase 通过相同 query 和同日网站访问增强可比性，但其 harness、browser、viewport 与 website snapshot 未被 pin。

AndroidWorld 在 Pixel 6 emulator pool、Android 13/API 33 下报告 69.7%。观察为 screenshot-only，不含 accessibility tree；排除八个浏览器函数并加入三个 mobile action。Maximum steps 与 random seed 使用 benchmark defaults，但数值、emulator image、已安装 app version、locale 与 reset state 均未报告。OSWorld 超出支持范围，没有 Gemini 分数。

这些分数均为厂商报告结果，只能在既定 task adaptation、sampling、人类 judge、action space 和 environment 条件下支持评测主张。
