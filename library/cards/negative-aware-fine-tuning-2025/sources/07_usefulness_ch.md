对 rollout/search/test-time trace Track，NFT 给出了 accepted/rejected 在线 group 的具体 schema：数据 item 与 revision、渲染后 prompt、old/updated checkpoint、16 条候选轨迹、抽取最终答案、二元 verifier 结果与版本、逐题成功率、正负划分、截断状态、token-level old-policy likelihood、implicit-negative ratio、clip event、prompt weight、mini-batch 与 rollout step，以及后续评测。全对/全错 group 的过滤也应记录，不能静默丢弃。

这些记录可支持从失败学习、verifier-error 敏感性、SFT/RL objective 等价和困难 prompt curriculum 研究，也能审计一个负信号究竟来自数学错误、格式错误、截断还是 verifier bug。官方代码与权重支持实现研究，但缺少原始 trace log 意味着无法精确重建论文中的在线数据集。脱离 prompt、verifier、old policy 和采样上下文，不应把负答案作为通用“坏示范”发布。
