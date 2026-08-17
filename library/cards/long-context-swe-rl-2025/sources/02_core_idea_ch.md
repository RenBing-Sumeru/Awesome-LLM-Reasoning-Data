论文的贡献是一套两步自训练 recipe：先让 Qwen2.5-72B-Instruct 自行生成仓库交互 episode，只用通过可执行测试的样本进行 warm-up；再对每个任务采样 10 条长程、多轮 episode，在隔离软件环境中计算终局 reward，并进行同步 on-policy DAPO。

每条 episode 把 issue 条件化的仓库状态与完整 action-observation history 绑定在一起。可用动作包括任意 shell command、按行区间编辑、搜索/导航工具、文件创建和无参数 `submit`。verifier 观察最终环境与 validation suite，而不判断每一步推理是否正确。长度 shaping 之前，提交 patch 只有在通过全部所需验证测试时才得 1，否则得 0。step penalty 在前 10 轮为 0，之后随轮数线性下降，到 turn cap 时接近 -1。每个任务的 10 条 rollout 组内会对最终 reward 做归一化；同一个 trajectory-level advantage 广播到该轨迹全部 token，零 advantage 样本被丢弃。

因此，这个 feedback contract 可执行但稀疏。它可以用保留测试集检查最终仓库并惩罚过长 episode，却不能给单条命令做 credit assignment，不能证明超出测试覆盖范围的语义正确性，不能发现不安全的中间行为，也不能训练校准后的 abstention。RFT 只保留终局成功样本，进一步改变了可见分布；保留 episode 内触发格式错误的 assistant turn 则会被 mask。RL 在组内 reward 有差异时可同时利用成功和失败轨迹；全组 advantage 为零时不会产生更新。

相较公开的 SWE-rebench 底座，论文增加了论文专属过滤、成功 episode RFT、两阶段长上下文 RL，以及明确的终局 reward/训练接口。相较 Agent-RLVR 等一般性 agentic RL recipe，它的特定证据面是具有完整 shell/edit observation、65k/131k context 与可执行验证的软件仓库修复。论文没有发明 SWE-rebench 任务、shell-agent 范式、二元测试 oracle 或 DAPO objective，也没有发布新的 trajectory dataset。
