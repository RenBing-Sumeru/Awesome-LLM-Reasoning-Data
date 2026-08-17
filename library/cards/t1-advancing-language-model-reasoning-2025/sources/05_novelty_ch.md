此前的基线并非“没有推理数据”：outcome-reward 数学 RL、多样本 search、entropy/KL regularization 与 test-time sampling 都是已有的一般性成分。T1 改变的是组合方式，以及交给 SFT 的对象。它不只保留成功解题轨迹，而是让 LLM 将多个尝试及基于正确性的 critique 或 verification 整合为一条连贯、显式包含错误的 chain；再将这种链形式与高温 64-rollout RL 协议和长回复 inference analysis 连接起来。

因此，对 reasoning-data 的方向信号是一种接口选择：当最终监督仍是答案级标签时，轨迹可以显式表达一次尝试及其纠正。它可能让学习者看到可恢复的错误，但不证明每一次纠正为真，也不证明该轨迹忠实反映了模型内部过程。RLOO、normalized KL、entropy bonus 和答案核验应被视为文中报告的整合，而不应被写成完全新的原语。

复用前应检查：目标任务是否有可靠的最终标签核验；坏回复 penalty 是否能迁移；能否接受 teacher 生成的 critique；训练/评估语料是否隔离。与 process-reward 或 step-verifier 资源比较时，不能悄然把合成 self-verification 文本等同于被独立核验的中间步骤标签。
