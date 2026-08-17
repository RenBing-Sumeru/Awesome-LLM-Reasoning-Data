对 `rollout_search_test_time_trace_data` 轨道而言，WebSeer 提供了一个面向错误恢复的搜索 episode schema。可复用记录应保留输入与可接受答案；每个推理片段、查询、URL、网页阅读器 prompt 与响应、Python 调用、观察、提交、标量反馈、verifier 判断与证据路径；以及尝试序号、停止原因、环境/API 版本、模型 revision 和奖励设置。为校准与失败分析，还需要保存被拒 verifier 样本和达到预算上限的 episode，而不能只保留成功修复轨迹。

在固定 revision 与 license 的前提下，SFT 和 RL 发布可用于智能体 SFT、on-policy RL 实验、轨迹分析，以及研究何时额外 test-time search 有效。研究者应区分三个对象：已发布训练 episode、仓库中的模型输出、benchmark 评估记录。最后一种对象衡量的是系统，不能反向填充为每个中间步骤的质量标签。
