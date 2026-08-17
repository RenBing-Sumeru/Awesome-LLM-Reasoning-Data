训练包含两个主要阶段：SFT 和异步 RL。RL 混合覆盖数学、代码、科学、逻辑、深度研究和软件工程。`prime-rl` 异步运行策略 actor 与训练，因此 rollout 可能略微 off-policy。环境采用 `verifiers` 接口，智能体代码任务可在隔离的 Prime Sandboxes 中执行。

完整训练约使用 64 个节点上的 512 张 NVIDIA H200，持续约两个月。官方发布公开了模型、训练器、verifier 框架和环境生态，但没有固定一份不可变清单，列出报告运行中的全部提示、环境版本、混合权重、解码参数和 rollout 记录。
