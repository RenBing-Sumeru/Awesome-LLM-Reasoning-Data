最直接的有效性问题是 verifier 不匹配。在固定修订中，`solved` 只要求 PASS_TO_PASS 测试仍在 passed 集合中，并不要求候选补丁使 FAIL_TO_PASS 通过。因此，补丁可能只保留既有行为、完全没有实现请求的修复，却仍满足公开谓词。

发布演化说明不完整。论文时期的 528/728 与当前约 6.82k 行、4 split 发布不同；`dev`、`lite`、`full` 和 `multilang` 的重合、派生规则、语言构成、修订与删除没有完全对齐。发布也未给出正式 train/dev/test 使用策略或跨 split 去重。

新近采集只能降低而不能消除污染。来源 issues、PRs、patches 和 tests 均公开；没有保证 cutoff、预训练暴露测试、重合审计或发布后泄漏政策。参考测试可能对等价解产生假阴性，也漏掉可读性、可维护性、性能、安全和协作质量。

重放仍有条件。虽然有 base commits、commands、images 和 timeouts，但 image tag 与依赖可变化；仓库删除、网络、外部包、cache 和平台差异也会改变结果。没有 immutable OCI digest/依赖锁 manifest 或系统化多次重放率。

HF 与 repotest 声明 MIT，但上游仓库、issue/comment、patch 和 test 权利各异。论文称避免专有、版权或敏感信息，却没有逐行权利矩阵、PII 扫描、归属清单、同意或 takedown 流程。运行挖掘仓库还涉及安全：作者扫描 668 个仓库，发现 2 个带病毒特征。网络、secret、Docker capability、供应链防护和宿主隔离需要明确控制。

成功/失败轨迹保留是可选的。提交者被鼓励链接轨迹，否则平台展示 GitHub PR；这不能形成完整统一的成功与失败智能体 episode 或中间制品语料。
