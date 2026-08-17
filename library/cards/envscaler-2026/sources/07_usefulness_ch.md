对指定的 environment_agent_trajectory_data track，EnvScaler 的价值在于暴露了多个可分离的 post-training object，而不只是一个 model checkpoint。研究者可以分别检查 environment state/rule/tool/code、SFT task initialization、带 verifier 的 RL task initialization，以及 SFT message/tool-call transcript。下游 inventory 应分别保留这些对象，绝不能从 runtime API 推断 RL trajectory 已发布。

固定 revision 后，可以检查 environment 与 scenario。审计可以静态分析 191 个 code object，统计 tool 与 state-schema field，把 4,684 条 SFT 和 2,550 条 RL scenario 映射到 env_id，核验只有 RL 分支携带 checklist_with_func，并在隔离环境中用 final-state mutation 测试每个 check。执行之前，应对生成 class/check string 设置文件、进程、credential 与 network 边界的 sandbox。

SFT 复用只能谨慎进行。由于默认 Hugging Face builder 混合不兼容 schema，用户必须显式选择兼容 raw 或 transformed trajectory file；还应复现论文的 format/completion/length filter，区分 conversation 与 non-conversation stop rule，保留 teacher identity Qwen3-30B-A3B-Thinking-2507，并避免把这些 row 标为 terminally verified。upstream right、lineage、dropped failure 与 data-specific license scope 仍需审查。

RLVR 研究可以从 2,550 条带 verifier 的 RL scenario 与公开 runtime/training scaffold 开始。可执行研究包括：对每个 Python predicate 做 property-based test、盲评 checklist coverage、测试 alternate-valid state、搜索 adversarial shortcut、探测 reward hacking、比较 warning-versus-pass sensitivity，并进行 cross-version replay。这是研究起点，不是对论文 RL run 的 drop-in reproduction，因为 online rollout、reward trace、确切 endpoint、dependency 与 run manifest 都缺失。

construction recipe 可用于受控 ablation：固定 task count 改变 environment count，或固定 environment 改变 scenario 与 rollout count；比较 strict-pass selection 与 pass-or-warning；发布 rejected program 与 trajectory；测量 gain 究竟来自 environment diversity、teacher behavior、verifier coverage 还是 data volume。Qwen3-1.7B 在 Tau-Bench 的下降应保留为必要 negative control。

复用等级是 mixed 且有条件。证据支持 SFT、RLVR 与 agent training 这些预期用途，但尚未证明发布可安全、无限制或 drop-in reproducible 地用于训练。固定 revision 后可做 environment/scenario inspection；SFT 需要 schema 选择和 rights/quality review；准确 RL 复现则因缺少 rollout/replay、verifier、security、dependency 与 version 证据而受阻。benchmark gain 不能覆盖这些边界。
