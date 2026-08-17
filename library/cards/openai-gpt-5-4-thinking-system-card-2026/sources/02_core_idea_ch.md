一句话贡献是：GPT-5.4 Thinking 将前沿披露从粗粒度 reasoning RL 扩展到具体的 long-rollout preservation、confirmation-policy、prompt-injection 和 cyber-safety 干预，同时分开披露 dynamic safety trajectory、production-like resampling、CoT monitoring、programmatic agent test 和两级部署监督。

训练仍只部分可见。模型应在长 rollout 后回退自己的改动，而不破坏隐式模拟用户工作；computer-use 行为应同时遵守 platform policy 与 developer 提供的 confirmation policy；prompt-injection 与 cyber training 应产生符合 policy、对双重用途尽可能有帮助且对有害 action 拒绝或降级的行为。这些是 objective，不是已披露 reward equation：detector、label、scale、aggregation、calibration、rollout distribution 和 optimizer 均为 unknown。

评测包含多种不同 data object。动态 mental-health、emotional-reliance 和 self-harm 评测使用 adversarial user simulator 生成多样 multi-turn trajectory，并检查每条 assistant message。Production-like pilot 取代表近期 GPT-5.2 Thinking traffic 的去标识 conversation，只用 GPT-5.4 Thinking 重采样最后一轮 assistant turn，再自动标注新 completion。Connector 与 function-call prompt-injection 评测被明确说明为训练数据 split。软件与 cyber 环境使用 hidden test、secret flag、pass/fail、pass@1、medal threshold 或 expert rubric。

Monitorability suite 是另一个层次。GPT-5 Thinking 观察 CoT only、action/final output only 或 all messages，并预测 task-specific outcome；性能用 g-mean-squared 和 cross-fit filtering 聚合。Answer label 可能来自 task-specific grader 而非 CoT monitor，因而产生 mismatch。部署 cyber stack 再次独立：topical classifier 先筛选，safety-reasoner monitor 再映射到 threat taxonomy，并可触发 message 或 actor control。

相对 GPT-5.2，GPT-5.4 新增长 rollout 自回退干预、可配置 developer confirmation policy、GPT-5.4 专属 dynamic/resampled evaluation，以及首个通用模型的 High-cyber 部署 mitigation。4 月 CoT section 主要扩展 living audit lineage，不能倒填为首发训练证据。
