WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents 回答的问题是：Grounded language agent 需要带真实商品语言和奖励信号的可扩展交互购物环境，而不只是静态 QA 或昂贵 live-web 实验。主来源是 https://arxiv.org/abs/2207.01206；公开状态为 NeurIPS 2022 / arXiv（2022）。

决策边界：它应作为模拟电商环境和带奖励基准收录，不是真实电商网站。评测面是：一个 episode 包含用户购物指令、模拟商品目录页面状态、搜索/浏览/定制动作、选中商品、奖励组成和可选人类演示轨迹。它对 atlas 的价值在于任务对象和反馈规则可以一起审计。
