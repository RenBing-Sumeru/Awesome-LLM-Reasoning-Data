既有 multistage RLVR 会逐步增加 context length，但仍在普通 long-thinking prompt 上采样；direct short-context RL 可能截断蒸馏 policy 行为；不少 efficient-reasoning 方法则加入长度奖励或 mode-switching objective。TFPI 插入专门的初始化阶段，其概念性干预仅是 ThinkingFree 输入变换，同时保留相同 ground-truth reward 与 DAPO 机制，然后检验该初始化是否改善后续普通 RLVR。

对数据整理而言，方向信号是：即使 prompt 内容、verifier 与 optimizer 不变，prompt 格式和阶段身份也会实质改变 rollout 分布。因此可复用轨迹语料必须保留精确 chat template，并标明样本来自 TFPI 还是普通 thinking mode。追加空 think block、DAPO、Polaris-53K 与分阶段长度日程本身并非新组件；贡献在于把它们组织成 pre-RLVR policy initialization，并进行匹配算力分析。性能提升不能证明发布 rollout 的语义质量或完整性。
