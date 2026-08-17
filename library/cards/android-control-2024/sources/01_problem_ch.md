NeurIPS 最终 proceedings 条目将该工作列为 2024 年 Datasets and Benchmarks Track 论文，官方 OpenReview 条目将其标为 Spotlight。论文研究的问题是：仅依靠规模更大的人类 UI 操作示范进行监督微调，能否得到稳健的真实世界控制能力，以及域内的规模规律能否迁移到未见 app、任务和类别（NeurIPS 论文摘要及第 1–2 节）。

AndroidControl 解决的是数据瓶颈，而不是提出新的在线智能体环境。它发布 15,283 条人类示范，覆盖 14,548 个独立任务、833 个 Android app 和 40 个 app 类别，每个 episode 平均 5.5 步。其单条对象不是普通问答，而是把高层目标和逐动作低层指令，与 screenshot、accessibility tree 观测及 JSON 动作绑定在一起（论文表 1，第 3 页；附录 B.2，第 14–15 页）。

该对象属于 `environment_agent_trajectory_data`，因为发布单元是物理设备上的完整状态—动作 episode；它也属于 `data_construction_open_release_recipes`，因为论文说明了任务种子、人类采集、过滤、划分和 SeqIO 转换。它不覆盖相邻的可复现在线执行问题：app 版本、APK、账号与重置状态、网络状态、采集配套软件及可执行成功谓词均未发布。

本卡依据官方论文、附录、datasheet、仓库、bucket inventory 与 split manifest，已具备用于双语研究筛选的内容完整度。这些证据支持对离线 SFT 与评测的分析，但不能据此宣称该语料是不可变回放 benchmark，或已获准不受限制地复用；互相矛盾的许可证表述与未逐条检查的 TFRecord 内容仍是明确的审计边界。
