官方来源为 arXiv:2512.10218 v2，修订于 2025 年 12 月 22 日。这篇四页预印本关注 SWE-Bench-Verified 分数究竟只反映软件 agent 能力，还是也受到公开基准 issue 记忆的影响。核心诊断故意移除仓库修复通常需要的信息：模型只能根据 issue text，或根据 issue text 加文件路径但不含文件内容，猜出标准修复改动了哪些文件。论文第 6 节链接了作者维护的 OSF 项目，其中包含数据、日志、路径缓存和脚本。

这里需要解决的是归因问题。Claude 在上下文明显不足时仍能定位被修改文件，可能依赖 issue 或仓库熟悉度，而不是根据可执行证据完成缺陷定位。因此，该研究属于 `audit_failure_contamination_verifier_attacks`：它审计一个常用软件 agent 评测面的失效模式。它不评测补丁生成、仓库交互、测试执行或 agent 的动作策略。

一条评测记录包含 benchmark `instance_id`、仓库、issue text、可用时的 base 或修复前 commit，以及 gold `updated_files`。输入是 issue 单独使用，或 issue 加仓库相对路径；输出是一次 Claude 回答，经解析后得到 `predicted_files`。程序化反馈判断预测集合是否覆盖全部 gold 路径，或是否至少命中一个 gold 路径。这是静态、答案级的审计记录，不是 state-action-observation episode。

完整论文和官方 OSF 脚本公开了提示条件、评测模型快照、回答解析器和精确集合判据，因此本卡正文达到 L4 内容深度。复用边界仍然明确：专有训练语料不可见，行为差距不能证明逐样本污染；OSF 工件也没有已验证许可证、不可变注册发布、README 或依赖锁文件。
