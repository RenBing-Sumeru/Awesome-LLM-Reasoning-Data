一句话贡献是：DeepSeekMath-V2 交替训练自然语言 proof verifier 与 proof generator，用学习得到的 meta-verifier 约束 issue analysis 中的 false-rigor，并在最后两轮以多采样自动判断替代人工标签。

初始 verifier 接收 `(problem, proof)`，输出 issue summary，并按 rubric 给出三级分数：完整严谨为 `1`，总体逻辑成立但有小错误或遗漏为 `0.5`，存在致命错误或关键缺口为 `0`（论文 §2.1.1；Appendix A.2）。其首个 RL reward 是 programmatic format indicator 与 `1 - |预测分数 - 专家分数|` 的乘积。这会对齐标量标签，却不监督所描述缺陷是否真实存在。论文明确观察到，verifier 可以预测正确分数并虚构缺陷，从而获得满额 reward。

Meta-verification 加入第二个学习判断面。数学专家评价 verifier analysis 是否正确识别真实问题并足以支撑其 proof score；meta-verifier 学习此任务，增强后的 verifier reward 为 `R_format × R_score × R_meta`（§2.1.2）。随后 proof generator 接收 verifier 的 proof score，并被训练同时输出 `Solution` 与 `Self Evaluation`；其 reward 以 `alpha=0.76` 加权 proof quality，以 `beta=0.24` 加权 accurate self-assessment，其中自评分一致性还要乘 meta-verification（§2.2.2）。

这些系统观察到的是符合 rubric 的自然语言判断。它们可以在没有参考答案时标记看似合理的缺口并奖励自我修正，却不能保证所有数学依赖均被检查。Appendix A.3 还要求 meta-verifier：即使证明明显错误，只要原 verifier 声称没有缺陷，也应将该 no-defect analysis 视为合理；因此它验证被提出的缺陷，而不直接惩罚遗漏缺陷。这形成了假阴性表面，相关模型的重复判断可能共同继承该盲区。

它代表的方向是自然语言 theorem proving 的 learned proof feedback。最接近的对照是 DeepSeek-Prover-V2 或 AlphaProof，其中形式证明助手提供 programmatic terminal predicate。DeepSeekMath-V2 让文本证明验证更易扩展，但结论性更弱。其新意是反馈和标注闭环，而不是形式证明检查器。
