- 阅读第 3 节以了解七阶段构造漏斗、Qwen3-32B 质量过滤、Docker 执行及论文时期 528/728 数量；当前 HF 数量应视为后续发布。

- 不只看 schema，还要检查 verifier：固定版本 repotest 会应用两类 patch，却只根据 PASS_TO_PASS 设置 `solved`，没有强制 FAIL_TO_PASS。

- 区分任务制品与轨迹。commits、patches、tests、commands、images 和 timeouts 公开；完整成功/失败智能体动作历史与中间制品仍是可选、非规范的。

- 审计时应固定所有修订，对齐 4 个 splits，测试污染与等价补丁，验证容器重放，并检查上游权利、PII、恶意软件、网络、secret 和 sandbox 控制。
