AgentHER 的贡献是把一条可恢复的失败 episode 转换为针对“该 episode 实际完成了什么”的正向监督，并保留显式 selection 与 validation 信号。它不重写 trajectory，而是推断一个由 observation 支持的 hindsight goal，再把该目标与原始行为配对。

核心数据对象分为三层。source layer 保存原始 goal、完整 thought-action-observation episode 与 failure reason。relabeling layer 保存六类 failure type——`incomplete`、`constraint violation`、`wrong result`、`tool error`、`hallucination`、`off topic`——以及 recoverability、severity weight、actual achievements、key observations、hindsight prompt、rationale 与 judge confidence。consumption layer 把 accepted object 封装成 SFT、DPO 或 ShareGPT。对于 DPO，chosen conversation 使用 hindsight prompt 加 trajectory，rejected conversation 使用 original prompt 加同一条 trajectory；因此两侧 prompt 并不相同。

反馈契约是 mixed。WebArena 或 ToolBench 提供原任务的 failure/success outcome。对重标过程，论文用 gpt-4o-mini 提取 outcome 并生成 hindsight prompt，再用 `T=0` 的 Qwen2.5-72B-Instruct 作为独立训练的 second judge。设计上每个 judge 都应达到 `theta=0.5`，最多尝试 `K=3` 次；但 Algorithm 1 还允许用 `0.8*theta=0.4` 的最佳 single-judge 结果 fallback，因此实际边界比不加限定的“两个 judge 一致”更弱。随后 severity 缩放 SFT loss 或 DPO margin；它是 sample weight，不是 environment reward，也不是 RLVR 信号。

该方向可概括为 agent trajectory 的 failure-to-demonstration relabeling。相对只使用成功轨迹的 SFT，AgentHER 试图从失败中恢复有用行为；相对 goal-conditioned hindsight experience replay，它用自然语言表达重标目标，并由 LLM judge 验证；相对普通 synthetic preference construction，同一条固定 episode 会出现在两个不同 goal 之下，因此下游 DPO 代码必须保留 prompt context，不能把 pair 当成同一 prompt 的两个 answer。

分类依据来自数据对象与反馈面：full episode、pairwise preference 与 scalar weight 都附着在 offline environment trace 上。虽然存在 state/action 字段，却没有 step-local correctness label、process reward、replayed success check 或 policy-gradient objective。最接近的对比应是重标失败 agent trajectory 或审计失败保留的方法，而不是泛化的 agent benchmark 或 RLVR 数据集。
