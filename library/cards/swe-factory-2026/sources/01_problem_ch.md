FSE 2026 Research Papers 官方记录以 **SWE Data Construction, Automatically!** 接收本文，系统名为 SWE-Factory。本 Card 以 accepted title 与 accepted author list 为主体身份；较早的 arXiv/仓库引用标题 **SWE-Factory: Your Automated Factory for Issue Resolution Training Data and Evaluation Benchmarks** 属于旧身份界面，其中 Yingtian Zou 在 accepted version 中被 Haoyu Song 替换。不同版本的 headline result 也发生变化：accepted record 报告 GPT-4.1 mini 在 671 个 issue 上构建 337 个有效环境，单实例成本 $0.047。最终 ACM DOI 与 proceedings BibTeX 尚未核验。

GitHub issue-resolution 数据不能只靠 issue text 和 merged code 复用。一个可执行任务还需要 base commit、完整 test resource、dependency、Docker environment、evaluation script，以及判断原始状态失败而 gold patch 通过的 terminal predicate。现有构建流程可能遗漏 binary test file 内容，需要人工配置环境，并依赖项目特定日志解析器。

SWE-Factory 属于“数据构建与开放发布配方”轨道，因为它连接完整构建链：issue/pull-request pairing、binary test-resource repair、多代理环境生成、execution-grounded refinement、程序化 fail-to-pass 验证、trajectory collection、SFT 与工件发布。它不是 preference learning 或 online RL 的证据，benchmark improvement 本身也不能认证发布数据质量。

发布内容包含三个不等价数据对象。固定 revision 的仓库提供 671 条 raw SweSetupBench 记录，含 repository、pull request、base commit、issue text、gold patch 与 test patch。主要 Hugging Face 发布含 2,809 条 Kimi-K2 交互记录，公开 schema 只有 `messages`。后续 SWE-Factory-Gym 发布含 430 条 task/environment 记录，带 repository 字段、patch、Dockerfile 与 evaluation script。三者之间缺少逐行映射，是本 L4 Card 的核心审计边界。
