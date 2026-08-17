论文描述的 prior-work baseline 有两类。Graph-based 系统显式扩展网站/实体节点和边，因此需要人工设计 expansion 与 node-selection heuristic；较早的 evolution 系统通常通过注入信息让问题变长，可能产生不自然表述。WebExplorer 并非困难网页 QA、网页智能体轨迹、ReAct 或强化学习的首创。

第一项具体变化，是把 model-based exploration 作为构造底座：LLM 从 Wikipedia seed 出发浏览，并在内部累积信息空间，而不是构造规则驱动的显式图。第二项是 long-to-short evolution：通过 5 轮 prompt 删除显著线索，模糊日期/地点/名称，或用替代表述替换显式实体，同时保留答案。Table 1 为这一变化提供了相对于特定模型的难度信号，而不是逐记录有效性证明（论文 §§2.2–2.4）。

第三项贡献，是把任务构造连接到两种训练对象。身份未披露的 commercial model 为约 13K 条样本的 SFT 提供正确 ReAct 轨迹；约 12K 条 QA 则用于在线 GRPO，并接受 format 与 DeepSeek-V3 correctness reward。64K/50→96K/75→128K/100 的逐步预算，使 trajectory horizon 成为优化配方的一部分，而不仅是评测设置（论文 §§3–4）。

不属于本文新意的部分包括 search/browse action space、ReAct serialization、rejection sampling、Qwen3-8B、SFT、GRPO、format reward 和 LLM-as-judge。本文贡献是工程组合与数据构造方向，而不是证明每个演化问题或更长轨迹天然更好。复用前应检查 source-page lineage、答案唯一性、被拒样本、judge calibration、BrowseComp overlap、精确 teacher/base snapshot 及缺失的训练实现。100 条 QA 发布本身不能验证论文规模配方。
