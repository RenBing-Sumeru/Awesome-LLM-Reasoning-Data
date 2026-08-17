版本本身就是证据。官方 Safety Hub 记录 2026 年 3 月 5 日发布、3 月 17 日 mini appendix 和 4 月 24 日 Chain of Thought 更新。当前 38 页 PDF 虽保留 3 月 5 日封面，却包含两项后续更改；因此下述 CoT 主张属于 4 月更新和本次检索快照，而不是首发状态。

训练证据对 objective 方向最强，对实现最弱。3.7 节区分 destructive-action evaluation 与 long-rollout training，后者训练 agent 回退自身改动并保留隐式模拟用户工作。3.8 节说明 computer-use training 现在同时遵守 platform policy 和可配置 developer policy。5.3.3 节描述 cyber safety training：对双重用途尽可能帮助，对有害 action 拒绝或降级。各节均未给出训练数量、detector、reward、label 或 causal ablation。

安全评测构造较具体。Dynamic mental-health、emotional-reliance 和 self-harm 评测生成多样 adversarial multi-turn trajectory，并检查每条 assistant message 是否符合 policy（当前 PDF 第 4–5 页，表 2）。Production-like pilot 使用近期 GPT-5.2 Thinking 的去标识 conversation，只重采样最后一轮 assistant turn，再自动标注 completion（第 5–7 页）。它是 point-in-time model-only 估计，受 traffic、pipeline 和 safety-stack drift 影响。

4 月 monitorability 更新涵盖 13 项评测、24 个 environment 和三类 archetype，使用 GPT-5 Thinking 作为 monitor，并采用 g-mean-squared 与 cross-fit filtering。OpenAI 报告 Anti-Scheming 与 Memory 中存在 label/grader mismatch、对短 CoT 与少量 positive sample 的依赖，并计划在修订前移除这些环境。CoT-Control 包含 13,000 多个 benchmark problem/instruction pair，并按 CoT 长度分层；低 controllability 是审计结果，不是隐藏 reasoning 不可能发生的证明。

Split 证据是局部的。Connector 与 function-call prompt-injection 两项评测都是训练数据 split，因此不能测试未见攻击泛化（PDF 第 7–8 页）。Cyber safety evaluation 明确与训练不重叠，并混合去标识 production 与合成 rare case，使用 classifier flag 和 embedding clustering 选择（5.3.3 节，表 15）；该集合有意偏难，不代表常规 traffic。被点名的 held-out 或 uncontaminated 生物主张同样范围有限，不能确立全局 decontamination。

Programmatic evaluation 条件仍只属于评测。CVE-Bench 使用三次 rollout、40 题中的 34 题和 pass@1；Cyber Range 使用 16 次 trial 和 any-success pass/fail；外部 cyber run 最多 1,000 turns，每 100K token compaction。Monorepo-Bench 要求全部人工编写 hidden unit test 通过。HealthBench 有 5,000 条 conversation 和 example-specific rubric；first-person fairness 使用 600 多个难 prompt，并以 GPT-4o rating 对照人类。这些数字识别 data/scoring contract，不是 reasoning-RL reward。

部署证据独立存在：两级 cyber monitor 先使用 topical classifier，再用 safety-reasoner monitor，并可触发 message/actor control 与人工复核。报告证明该 safeguard stack 存在，不证明它用作训练反馈或 model-only evaluation score。
