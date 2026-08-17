ACL Anthology 官方记录将该工作列为 ACL 2025 长文（2025 年 7 月，第 13153–13167 页；DOI `10.18653/v1/2025.acl-long.644`）。论文研究的是一个边界明确的数据构造问题：在没有答案标签、执行环境、人类偏好、更强 teacher 或辅助 reward model 时，语言模型能否把通用自然语言查询转化为有用的推理训练记录？自我训练可以低成本生成回答，但若没有外部系统判断完整答案或中间步骤是否正确，样本选择就缺少确定依据。（论文 §1）

Genius 使用策略内部的价值代理处理这一缺口。在每个回答前缀处，当前 policy 采样候选下一步和未来 continuation，把 continuation 的 log probability 转化为 foresight score，按分数分布采样保留路径，并构造带 advantage 权重的 positive/negative 轨迹对。因此，训练对象不只是“一条 chain of thought”，而是把源查询和 policy checkpoint 与前缀、候选集、未来 rollout 池、归一化 log probability、所选 beam、chosen/rejected 轨迹及其 advantage 值连接起来。官方构造脚本把最终偏好视图序列化为 `prompt`、`chosen`、`rejected`、`chosen_weights`、`rejected_weights` 和 `chosen_average_weights`。（论文 §2.2；官方仓库：`foresight-sampling/`）

这使论文直接属于 Data Construction and Open Release Recipes 类别：它给出了从查询到偏好再到 checkpoint 的流水线，并公开采样、偏好构造和 ACO 训练代码。它没有解决的相邻问题是语义正确性验证。该分数只能观察同一 policy 认为 continuation 有多大概率；它看不到 reference answer、测试结果、proof state、人类判断或外部正确性信号。因此，“purely unsupervised”表示 Genius 循环没有使用外部标签，而不表示所选分支已经被证明正确。

本卡达到 L4，是因为 ACL 论文、完整附录、官方仓库、两个模型仓库和两个源查询仓库提供了足够信息，可以重建预期模块并审计反馈契约。但证据边界仍然重要：未核验到精确的 25K/32K 查询清单、论文所报 100K/128K 偏好快照、rejected-sample 清单、不可变实验版本、逐条去污染结果或完整许可证链。
