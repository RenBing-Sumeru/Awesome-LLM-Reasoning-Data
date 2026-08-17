对 environment-agent track，MobileRL 是一套把 data construction、online behavior、verifier choice 与 optimizer sampling 连起来的具体 recipe。复现可把 action-only SFT、action-matched reasoning augmentation、带环境特定 terminal check 的 grouped mobile rollout 分阶段实现并分别记录，避免把 final benchmark gain 全部归因于 RL。

AdaPR 与 FCF 可作为 trajectory-data selection 的实验 baseline。每条 candidate episode 应记录 task ID、policy/environment version、terminal outcome、path length、SPA reward、advantage、replay selection、pruning decision、failure count、cooldown/removal status 与 reuse count。可对照 uniform on-policy sampling、无 difficulty control 的 replay、failure retention 与 balanced hard-case sampling；sample-efficiency gain 必须同时报告 coverage 与 verifier-error metric。

mixed feedback contract 适合 verifier 研究。AndroidWorld 可作为 rule-based anchor 来校准 AndroidLab learned judge。研究者可以构造 terminal result 相同、但 collateral action、unsafe permission、redundant step 或 visual/XML ambiguity 不同的 paired trace，再报告 false positive/false negative 后用于 RL。论文的 86% accuracy 只是起点，不是足够的 safety threshold。

官方 evaluation 仓库可用于固定版本的 AndroidWorld/AndroidLab 测试，MobileRL-9B 也可从 Hugging Face checkpoint 评测。使用时应固定 repository HEAD `82f3b7e9028098f0683b97dbe228bad300a55fb1` 与 model revision `3415b64eb7ba1289475d7a93e96a26276f644ba9`，并记录 image resolution 与 inference engine，因为官方材料已证明结果对此敏感。

复用等级是**已发布 artifact 可用于 evaluation/model inference；training recipe 可参考，但训练复现需等待 release**。论文明确支持 SFT、rule-verifiable RLVR 与 agent training；然而 code/model license 不覆盖未发布训练记录。训练复用前需要 corpus、task、reward model、完整成功／失败 rollout、replay/filter log、immutable environment、rights、privacy audit 与 security control。
