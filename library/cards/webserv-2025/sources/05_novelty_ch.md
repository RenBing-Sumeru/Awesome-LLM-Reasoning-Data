WebServ 最有力的新意，是把浏览器 I/O 可靠性与可重置的服务器隔离共同纳入 on-policy 训练。

第一，observation interface 从实时 DOM 自动生成，而不要求每个网站手工设计表示。它删除低价值 markup，同时保留显式交互线索和控件状态。论文中的受控对比与 visual-cue ablation 支持“环境表示会实质影响成功率”这一结论，但不能证明对所有网站都普遍更优。

第二，action execution 把异步页面稳定过程视为环境 transition 的组成部分。跟踪 fetch 与 XMLHttpRequest 活动，是针对 SPA 行为的具体设计；固定 sleep 和整页 load event 往往处理不好这种情形。

第三，Incus cloning 把服务器状态 reset 从运维细节提升为 RL 数据路径的一部分。块级 copy-on-write 允许隔离有状态 rollout，而不必反复复制数 GB 的 Docker layer。论文报告的吞吐把这一基础设施选择与实际 on-policy collection 联系起来。

第四，仓库同时公开 reward implementation 与经成功筛选的 SFT corpus，比只有代码的发布更可审计。但发布本身也暴露出明确边界：成功 SFT 记录可得，失败记录、逐条 outcome、RL rollout log 和 checkpoint 不可得。

WebServ 并未分别发明 WebArena task、浏览器自动化、DOM parsing、Incus、SFT、GRPO 或 dynamic sampling；其贡献在于端到端集成与评测。把它描述为新的 RL 算法、确定性 replay、已验证的生产网站泛化，或完整成功/失败轨迹语料，都会超出证据。

