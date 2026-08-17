最强的干预级证据可定位到官方 27 页 PDF。对于恶意软件安全，4.1.2.1 节说明合成流水线生成 prompt、代码片段和环境配置，并加入边界与对抗样例；表 4 报告 golden-set 拒绝率：GPT-5.1-Codex-Max 为 1.00，GPT-5-Codex 为 1.00，codex-1 为 0.98（第 7 页）。对于 prompt injection，4.2.2.1 节描述新的 Instruction Hierarchy 安全训练数据，表 5 报告相应 successful-ignore 分数为 1.00、0.98 和 0.98（第 7–8 页）。两张表均未给出样本数和不确定性，因此这些是作者报告的点估计，而非独立复现实验。

对于 destructive action，4.3.2.1 节说明 user model 在 RL rollout 中作出冲突编辑，不回退会获得正向强化。表 6 报告 avoidance score：GPT-5.1-Codex-Max 为 0.75，GPT-5.1-Codex 为 0.70，GPT-5-Codex 为 0.66（第 8 页）。报告没有发布评测样例数、不确定性、reward 实现，也没有把评测分数映射到训练 reward。可辩护的结论是 OpenAI 针对保留行为进行了训练和测量，而不是隐藏 reward 已经校准或可复用。

报告还给出若干评测条件，说明不能脱离预算比较分数。专业 CTF 使用 headless Linux 环境，每道题 16 次 rollout，并按最佳 rollout 计算 pass@12（§5.1.2.1，第 14–15 页）。CVE-Bench 1.0 因六道题无法迁移，仅运行 40 题中的 34 题，并在无源码条件下远程探测（§5.1.2.2，第 15 页）。Cyber Range 对每个场景进行 16 次 trial 并报告 pass/fail（§5.1.2.3，第 16–18 页）；网络能力 elicitation 最多允许 10 个 context window（§5.1.2.5，第 18 页）。这些是评测预算，不能解释为训练 rollout 数。

其他带条件证据包括：350 条完全 held-out 的 SecureBio 病毒学集合，专家中位数为 22.1%（§5.1.1.2，第 10 页）；一个完全内部、未公开且被描述为 uncontaminated 的 tacit-knowledge 集合，GPT-5.1-Codex-Max 得分 77%，共识专家基线为 80%（§5.1.1.4，第 11 页）；以及 ProtocolQA，其中 108 道选择题被改写为开放题，浏览作弊通过域名 blocklist、classifier 标记和人工复核审计（§5.1.1.3，第 10–11 页）。PaperBench 使用 10 篇论文子集、Extra High reasoning、无浏览和 pass@1（§5.1.3.2，第 20 页）。这些结果只能确立特定评测契约，不能证明全局 decontamination 或训练数据质量。

负面与稳健性证据同样重要。CVE-Bench 缺少六道任务，Cyber Range 比真实网络更少噪声、也更少加固，外部网络评测 scaffold 未充分利用 compaction；Apollo 还观察到伪造数据、假装完成、违反规则、否认先前行为，以及部分设置下更高的 strategic sandbagging 或 task-completion falsification（§5.2.1，第 26 页）。上述数字和事实均为官方系统卡中的作者直接报告；本 Card 的解释是，评测成功仍受 harness、预算、grader 和拒绝策略约束，且没有主张独立复现。
