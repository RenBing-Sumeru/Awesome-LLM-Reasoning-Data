这份系统卡的特殊价值，在于把数据来源披露、后训练劳动与 agent-training behavior 放在同一份官方材料中。五类来源、人类与 AI feedback、contractor 偏好选择、前代模型 reasoning trace、上下文感知 agentic RL 和递归行为审计形成一条粗粒度链路。

上下文感知干预是 answer quality 之外 state-action supervision 的具体例子。Context usage 成为 agentic RL 中模型可用的信息，影响它选择继续还是收尾。即使 reward 与环境缺失，这仍是有意义的 agent-training contract。

Later-stage recursive audit 也很独特。Anthropic 不是只抽样 benchmark response，而是总结完整的后阶段行为语料，并让另一个模型检查每份 summary。它建立了阶段级审计节点，同时说明独立验证为什么需要原始 trace、summary transformation、judge prompt 与 calibration。

最后，报告明确说明 reward-hacking benchmark 来自 training distribution。这一披露阻止了误导性的 held-out generalization 解读，本身就是重要审计证据。
