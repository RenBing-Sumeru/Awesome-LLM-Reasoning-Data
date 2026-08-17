Aegis 以 ICLR 2026 conference paper 发表；本卡片采用 ICLR/OpenReview 记录、2026 年 4 月 27 日的 arXiv:2509.14295v6、论文全文与附录、作者项目页和 GitHub 仓库，以及官方 Hugging Face dataset 作为一手来源。accepted metadata 仍为 `L3_summary_ready`：双语正文提供 review-ready 深度，但不提升 curation level，也不预填人工 Review 决策。

论文解决的具体问题是多智能体系统（MAS）中的错误归因。terminal task failure 本身不能说明由哪个 agent 引入错误、属于哪种 failure mode，而自然发生的失败通常没有受控 ground truth。Aegis 从成功 MAS trajectory 出发，故意扰动选定 agent；只有 task evaluator 将结果从成功改判为失败时才保留该 episode，并把 injection plan 作为 attribution target（论文第 4–5 节）。

一条发布对象是一段失败的完整 episode，而不是单个注入错误。公开 JSONL Viewer 暴露顶层 `id`、`metadata`、`input`、`output` 与 `ground_truth`；可见记录包含 task/query、序列化 conversation history、framework/benchmark/model/agent-count metadata，含 agent name、error type 与 injection strategy 的 `output.faulty_agents`，以及 correct answer 和 injected-agent provenance。语料包含 **9,533 条 faulty trajectory** 和 **24,843 个独立 injected-error instance**，覆盖 14 种由 MAST 派生的 mode，平均每条 trajectory 约 2.6 个注入。把 24,843 写成轨迹数量会误述数据对象。

它属于 `environment_agent_trajectory_data`，因为监督附着在六种 MAS framework——LLM Debate、MacNet、AgentVerse、DyLAN、SmolAgents、Magentic-One——之一产生的完整交互 trace 上，任务来自 MATH、GSM8K、HumanEval、SciBench、MMLU-Pro/MMLU 或 GAIA。environment/evaluator 决定干预是否改变 terminal outcome，trace 则提供模型预测 faulty agent 与 error mode 所需的证据。

收录边界比“可回放 agent environment”更窄。已核验发布主要是 offline JSONL corpus 加构造与评测代码；确切 GPT-4o-mini snapshot、evaluator version、reset state、baseline-to-variant link 与跨 artifact manifest 均未固定。Aegis 支持论文中的 SFT、GRPO/RLVR、contrastive 与 evaluation 研究，但不能据此扩张为通用 agent training、process supervision、preference learning 或不可变的端到端 replay。
