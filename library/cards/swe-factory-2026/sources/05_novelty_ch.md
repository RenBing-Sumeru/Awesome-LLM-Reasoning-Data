最接近的构建基线是 SWE-bench 系列：issue/pull-request extraction、repository checkout、environment setup 与 gold-patch fail-to-pass validation 已经存在，但环境工程与日志解释需要大量人工工作。SWE-Gym 同样封装可执行软件工程任务与轨迹，但采用半人工 dependency configuration。

SWE-Factory 从三个具体方面改变构建接口。它修复 GitHub diff 遗漏的 binary test resource；把 repository exploration、Dockerfile 编写、evaluation-script 编写与 execution analysis 分配给四个协作代理；并围绕 exit-code marker 标准化 test-status extraction。Execution feedback 与同 repository/version 成功配方检索，使环境构建成为迭代过程，而不是 one-shot generation。

新的数据对象不只是 issue-patch pair，而是连接 source task 字段、可执行 environment recipe、fail-to-pass decision 与用于 SFT 的完整 tool-interaction episode。Quality signal 附着在环境接收结果上，而不是单个 reasoning step 上。公开 trajectory row 不携带这一信号，因此发布内容不提供 process label 或可审计的 trajectory-level reward。

新意是自动化与生命周期集成，而不是新的 testing semantics、Docker substrate、SFT objective 或独立 verifier。从 671 个 benchmark task 扩展到 2,809 条训练 trajectory 提供了工程证据，但缺失的 Appendix、逐行 mapping、immutable image 与 release manifest 使公开工件尚未完整实现论文所声称的端到端数据对象。
