论文的 prior-work baseline 包括：把更多 tokens 或重复 reasoning 分配给单次决策的 test-time scaling，以及在固定 interaction budget 下进行的 online agent training。TTI 改变了 scaling axis：它把 environment actions 及其带来的新 observations 视为 test-time resource，再通过 expanding-horizon curriculum 将该资源与训练耦合。

具体的数据创新并不是新的 browser action language 或新的 per-step verifier，而是 `current-policy rollout -> terminal success -> successful-episode replay -> per-step action likelihood` 这条选择流水线；允许的 horizon 从 10 逐步增加到 30，replay 又受到 recency/domain-balanced sampling 的塑形。由此，收集到的监督是 non-stationary 的：后期 iterations 可以包含早期 horizon 无法表达的行为，而 replay buffer 决定哪些早期成功仍会被训练看到。

它与 RLVR 的区别十分重要。verifier 确实产生 binary terminal reward，但 optimizer 并未对成功与失败 returns 使用 policy-gradient objective；它丢弃失败，只对保留成功中的 actions 最大化 cross-entropy。将公开 recipe 记为 `sft` 加 `agent_training`，才能保留真实 data path，并避免把所有经过 verifier 筛选的更新都当作 RLVR。

论文还在同一 recipe 中区分了两种反馈接口。WebArena 的 programmatic ground-truth evaluation 检查 final task state；WebVoyager 的 prompted multimodal judge 根据 responses 和 screenshots 估计 success。二者共享的 binary output 掩盖了不同的 error surfaces，因此 evaluator identity 必须伴随每条 episode 或 checkpoint lineage record。这对 reasoning-data research 是一个方向信号：不能只根据 horizon 审计 interaction scaling；feedback provenance 与 replay selection 共同决定更长 interaction budget 实际教会了什么。

并非新贡献的组件包括 chain-of-thought prompting、behavior cloning、replay buffers、browser environments 和 binary terminal evaluation。该工作更适合被理解为带特定 curriculum 的 integration and scaling study。复用前仍需核验 exact split manifest、task-generator lineage、successful/failed episode counts、evaluator checkpoint 与 prompt、paper-versus-script settings、environment snapshot 和 artifact licenses。在这些检查完成前，novelty claim 与 benchmark gain 都不足以授权重建论文所用的数据分布。
