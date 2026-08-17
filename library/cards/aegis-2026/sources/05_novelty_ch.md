既有多智能体诊断已经可以评测 terminal success，或要求模型识别 faulty participant；Aegis 的 14-mode taxonomy 也继承自 MAST。prompt injection、response corruption、SFT、GRPO、contrastive objective，以及六类 source benchmark 或 MAS framework 都不是单独的新机制。因此应比较的 prior baseline 是稀疏或自然观察到的 attribution data，而不是假设过去不存在多智能体评测。

Aegis 改变了数据对象：它把完整失败 MAS episode 与受控 intervention record 绑定，后者包含 selected agent、error mode、injection strategy、correct answer 与 planned provenance。它也改变了选择过程：每条数据先要求一个配对的 successful baseline，只有让 task evaluator 结果反转的 perturbation 才被保留。这样，trace、terminal predicate 与 attribution target 被连接在同一 post-training object 中，而不是把失败当作没有标签的 transcript。

feedback interface 分为两层。构造阶段用异构 task evaluator 决定一个 intervention 是否进入语料；GRPO 则把结构化 agent/error 一致性转成 normalized scalar reward，并对 malformed、duplicate、false-positive 或 excess output 给出 partial credit 或 penalty。DCL 进一步加入 turn attention 与 agent/error prototype，以复用相同 episode-level label。真正的方向信号是 intervention、retention、structured target 与 downstream reward 的对齐，而非某个单独 optimizer。

主要工程贡献是覆盖广度：9,533 条 failure、24,843 个 injection、六类 task、六种 MAS framework 与 14 种 mode。规模不能消除认识边界。由于 label 等于 planned intervention，发布能说明“改了什么”，却不能在同时扰动多个 agent 时证明“哪项改动是必要原因”，也不能覆盖 taxonomy 之外未预期的 emergent failure。

复用前应核验完整 nested JSONL schema、DCL 作为 anchor 的 successful baseline 是否公开、discarded-attempt ledger、grouped split isolation、DyLAN refinement、确切 evaluator 与 GAIA judge version、model snapshot、上游 rights，以及绑定 paper/code/HF revision 与 hash 的 manifest。这些检查决定该新意可用于 training data、attribution benchmark，还是只能作为 construction/audit reference。
