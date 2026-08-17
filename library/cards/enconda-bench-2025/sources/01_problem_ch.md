EnConda-Bench 研究软件工程 agent 的一个具体失效边界：agent 即使识别出 README 中存在依赖、命令、路径、顺序或版本错误，也未必能把诊断转化为真正完成仓库构建与测试的 shell 脚本。论文的正式发表记录是 ICLR 2026 Poster；本 Card 的年份仍为 2025，因为 arXiv:2510.25694v1 首次提交于 2025-10-29。这个区分很重要：本次核验的仓库 commit `86ab7858613b85f4a8316f3cda3c83086b8cf7c2` 形成于 2025-10-30，早于最终会议版本。

一个 benchmark instance 是任务记录，而不是已发布的交互 episode。论文评测中的任务由固定 revision 的 Python 仓库、基础 Docker 环境、含错误的 README 和结构化金标错误/修复注释组成。核验版本的主 JSONL 每行只有 `readme`、`repo_name`、`level` 和 `errors`；每个 error 又包含 `error_type`、`error_description`、`correction_candidates` 与 `golden_answer`。README 正文位于并行目录树，仓库 revision 则放在独立的 `repo_info.jsonl` 中。任务行没有 action、observation、retry、patch、stdout/stderr、容器状态、测试结果或 terminal verdict。

它归入 `environment_agent_trajectory_data`，是因为它定义了受环境约束的评测表面，并明确区分 process feedback 与 terminal feedback。它并不证明存在公开的 trajectory-training corpus：Appendix C 说明框架可以生成成功和失败 trajectory，但在核验 commit 的官方目录中没有这类 rollout 集合。它也不是通用代码正确性评测；目标是注入 README 错误后的环境配置，最终成功条件是构建成功、测试正确执行并正常退出。

因此，它对 Atlas 的价值有两层：一是发布了可计数、带金标诊断与修复的任务语料；二是暴露从过程级识别到可执行恢复之间的差距。当前 L4 正文的证据边界来自论文、appendix、ICLR 记录、全量语料 schema/count 核验和固定版本代码审计；端到端 replay、实验 trajectory、精确 executor 来源以及论文与发布版本的对应关系仍明确保留为未知。
