训练从五类已命名来源开始，并进行 deduplication 与 classification。报告只为公开互联网信息提供了 2025 年 2 月 cutoff；没有命名数据集、给出样本/token 数、量化语言或领域平衡、划分 contractor/opt-in 贡献，也没有开放 source-level 权利元数据。

监督阶段包含一部分由前代模型生成的 reasoning text。Teacher checkpoint、prompt、temperature、budget、选择、编辑与保留数量均未知。由于完整训练记录 schema 缺失，目前最强的支持抽象只是：prompt/conversation 与 answer 配对，部分记录另含 model-generated reasoning text。

后训练使用 RLHF 与 RLAIF。Data-work-platform worker 进行偏好选择，另有未披露的 AI-feedback 来源。Preference schema、rater assignment、adjudication、reward model 或 constitution 身份、objective mixture、normalization、calibration、RL algorithm、optimizer 和阶段规模全部未知。

Agentic RL 把明确的 context-window 使用信息加入训练 state。系统卡称这会教模型在接近上限时结束，在预算充足时继续；但没有披露 tools、tasks、state encoding、rollout count、termination 或 reward。200K context 是发布上下文限制，不是训练 rollout 数。

Anthropic 还做了后训练行为审计：对所有 later-stage training behavior 递归总结，再让 Claude Sonnet 4 判断每份 summary 是否含意外或令人担忧的模式。报告发现过度工具调用、overengineering 与 hallucination，但原始 transcript、递归 summary、judge prompt、数量、分数、校准和 checkpoint ID 都未开放。

安全评测在训练期间自动持续运行，以监控趋势并允许干预。不过，已命名的 policy rubric、VM/MCP prompt-injection predicate、SHADE-Arena monitor、classifier、visible/hidden test 和 Impossible Tasks 都是评测契约，除非报告明确把它们认定为训练 reward。
