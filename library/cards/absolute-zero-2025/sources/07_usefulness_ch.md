对于 **Data Construction and Open Release Recipes** track，Absolute Zero 最适合作为在线 curriculum blueprint、verifier 审计对象和披露基线。

1. **实现最小 autotelic RLVR loop。** 分离 proposer context、proposal、executor validation、task buffer、solver instance、terminal reward 与 role-relative optimizer。从 identity triplet 开始，在训练前验证 seed generation 能否复现文档中的 256 行 buffer。
2. **在同一 verifier 下比较任务族。** 固定 optimizer 与 sampling budget，分别消融 deduction、abduction、induction、历史 reference 和 proposer update。保留 role 与 creation-step 字段，以便把增益归因到 curriculum 变化。
3. **审计 learnability reward。** 保存全部八次 solver 尝试、成功率计算、format outcome 与 admission decision。把 `1 - success_rate` 与考虑置信度或 held-out 的估计比较；八个样本有噪声，零成功任务也没有正 learnability signal。
4. **加固 environment。** 用固定的 sandbox 替换原始 `exec`/`eval`；关闭网络，隔离文件系统和进程，限制 CPU/内存/时间，并对 denylist 绕过、state leakage 与 nondeterminism 做对抗测试。
5. **发布可复用 episode ledger。** 公开不可变 buffer 及成功/失败记录，并包含 prompt、completion、executor observation、verifier version、reward、task lineage、seed、model checkpoint 与 run ID。这样才能把开放 recipe 提升为可审计数据发布。
6. **检验捷径与污染假设。** 按 global-variable 使用、comment/docstring、program family 及与评测任务的相似度分层；报告移除通信通道和匹配程序后的性能。

复用等级为 **recipe/audit reference with conditional code reuse**。公开 seed 可用于测试 parser 与初始化，代码可用于理解 pipeline，但它们不是与报告在线运行等价的训练语料。executor 安全、缺失 trajectory lineage、checkpoint/数据许可不清和无去污染证据阻止无条件执行或训练复用。报告的模型与分数属于 evaluation evidence，并不能证明发布了一个完整的“zero-data dataset”。
