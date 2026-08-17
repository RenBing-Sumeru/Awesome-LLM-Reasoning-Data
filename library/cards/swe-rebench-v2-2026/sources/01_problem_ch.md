本卡的主要来源是 2026 年 6 月 1 日修订的 arXiv `2602.23866v2`、ICML 2026 官方 poster 条目、固定到 commit 的官方 GitHub 仓库，以及两个 Hugging Face 官方发布。该工作解决的重点不是再增加一个 SWE 排行榜，而是训练数据瓶颈：仓库智能体需要大量任务说明，并且每条任务都要绑定可复现的代码状态、可执行测试与终态反馈；人工整理的 SWE benchmark 规模更小，也更集中于少数高资源生态。

主发布的数据对象是一条仓库修复任务/环境记录。它把 `problem_statement` 与 `repo`、`base_commit`、历史 gold `patch`、`test_patch`、`FAIL_TO_PASS`、`PASS_TO_PASS`、`install_config`、编程语言、仓库许可证元数据、诊断性 `meta` 绑定；issue-linked 发布还提供预构建 `image_name`。下游 episode 从 `base_commit` 的仓库状态开始，智能体与该状态交互并提交 candidate patch，随后 Docker 环境返回全测试集观测与终态成功判定。官方发布不包含智能体的 state/action/observation 轨迹，也不包含七个模型的诊断轨迹。

arXiv v2 与主 Hugging Face 发布包含 32,079 个可执行 issue-linked 任务，覆盖 3,617 个仓库和 20 种编程语言；数据只有一个 `train` split，并提供预构建镜像。独立的 PR-derived 发布在当前 Hugging Face revision 中有 126,300 条记录；论文将该层描述为 120,000+ 个任务，且这一层不提供预构建镜像。ICML 官方页面仍保留 36,000+ 个任务、3,800+ 个仓库和 100,000+ 个 PR 任务的旧数字，因此本卡把差异记录为 release drift，并以固定版本的 v2/Hugging Face 数量描述当前 artifact。

该工作是 `environment_agent_trajectory_data` 的锚点，因为它公开了可重置任务状态、环境配方、可执行反馈和完整 episode 的 terminal predicate，尽管轨迹必须由下游另行生成。它也属于 `data_construction_open_release_recipes`，因为任务挖掘、setup 合成、parser 合成、可执行性筛选、LLM 清晰度筛选与发布打包都是核心贡献。本卡的 L4 内容由论文全文、附录、数据 schema、许可证和 evaluator 代码支撑；未公开的完整 harvesting 实现、不可变环境 manifest、污染审计与失败语料仍明确保持 unknown。
