R3V 让同一个自生成完整解答池承担三种角色：通过验证的 completion 成为 direct SFT target，选中的失败成为负例条件 refinement 的上下文，正负混合的三候选集合用于训练答案选择。Selector 随后在推理阶段被复用，使训练时 rollout 构造与 test-time compute 在同一个 MLLM 中连接起来，而不需要外部 reward model 或 verifier head。

相对 STaR 等只按答案自训练的方法，其差异不只是反复采样，而是把终局正例和负例都转换成三种监督交互格式，再从更新后的 checkpoint 迭代生成新候选。相对偏好学习，R3V 提出的目标并不通过 DPO 把负例作为 rejected output 优化；负例出现在输入上下文中，用于 refinement 与 comparison。

该方法更准确的描述是“带结果标签的 rollout 组合”，而非 process supervision。失败样本可以展示给模型，因此在对话格式层面反馈更丰富，但唯一的正确性真值仍是解析后的最终答案或环境成功信号。论文自己的 fidelity audit 之所以重要，正是因为它阻止读者把 benchmark 增益误解为“保留的推理轨迹已经忠实”的证明。
