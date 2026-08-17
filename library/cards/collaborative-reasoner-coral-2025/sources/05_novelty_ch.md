Coral 把 next conversational turn，而不是整段 dialogue 或仅 final answer，作为 preference-learning object。从同一 prefix 采样 positive 与 negative siblings，可以控制 task、role instruction 与 conversation history。因此 preference 针对的是同一个 shared state 后应选择哪种 continuation，这对 collaborative-agent training 很有价值。

其 tree scaffold 在 breadth 与 tractability 之间折中。五个 siblings 暴露不同 next turns，但只有一个随机选中 branch 继续。重复五棵 trees 可以扩大 full-dialogue coverage，而无需递归扩展所有 sibling。这不同于 MCTS、对完整 conversations 做 beam search，或 persistent online replay buffer。

反馈设计把 LLM belief extractor 与 known task answers 结合。即使 utterance 含 reasoning、questions、hedging，或没有在固定位置明确答案，也能进行 turn-level labeling。它同时暴露一个核心审计问题：rule-based matcher 运行前，judge 必须先推断 agent 的 belief；extraction error 会改变 training label。

Coral 还区分 social analysis 与 data selection。Persuasion、assertiveness、persuasion quality 与 agreement 通过 belief transitions 测量，但报告的 SFT/DPO filtering 使用 answer correctness，而不是这些 social scores。因此，即使这些行为是工作动机，也不能声称 dataset 直接监督 politeness、effective disagreement 或 persuasion。

该 recipe 将 symmetric same-model self-play、shallow conversation-tree sampling、belief extraction、same-prefix preference construction、DPO 与 scalable Matrix serving 集成在一起。这些组件单独都不是新方法，论文也没有证明 iterative DPO 带来额外收益。其数据贡献在于把它们明确整合为 collaborative-reasoning construction contract。

对 open-release track 而言，这种新意伴随清晰边界。Repository 使预期 pipeline 可检查，并固定 Matrix dependency，却没有发布任何报告的 synthetic turns 或 trained weights。Open code 支持重新实现，但不能让报告 corpus 或 model lineage 变得可审计。
