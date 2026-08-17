InvBench 已把一次性 invariant generation 定义为“程序与循环 marker → invariant”，使用 UAutomizer 生成的训练目标，并评测候选是否帮助形式化验证。更早的 generate-and-verify 系统也已用符号工具过滤或修复 LLM proposal。因此，AST 清理、LLM 改写、SFT 和 verifier portfolio 这些组件本身并非首次出现。

WONDA 的具体变化，是把训练目标本身变成 verifier 可测的数据对象。它拆开原始 solver 输出中被混合的四项属性：非退化、归纳正确、对目标 assertion 充分、以及减少 solver 时间。语义简化器可以离开来源不变量的等价类；soundness 不是靠信任 LLM，而是重新检查实际改写候选来恢复。这样，一个 proof artifact 被转换为多个带形式化标签的替代目标，并保留记录被接收的原因。

grade 契约还揭示了 reasoning-data 研究中的关键区别：`correct` 不等于 `sufficient`，二者也都不保证 `faster`。Qwen3-0.6B 结果直接说明，面向 speed 的 curation 可以改善 portfolio time，而不提升 correctness rate。这比把所有 verifier-passing 记录视为同一正类更有信息量。

相较 Loopy、LaM4Inv、LEMUR，该方法把额外 verifier/teacher 预算放在数据构造期，并保留一次性 inference 接口；相较原始 InvBench 训练，它改变目标语法、语义多样性和接受条件。方向价值来自开放的 candidate-level 契约与发布，而不是首次使用形式化验证，也不是证明语义简化总优于 raw data。复用前应对齐候选/验证预算，与非 LLM 简化器和迭代 inference 对比，审计 program-level split 与许可，并固定与论文匹配的实现。
